import { BlobServiceClient, BlockBlobClient, StorageSharedKeyCredential } from '@azure/storage-blob';
import { appEnvs } from '@config';
import { uuid } from 'uuidv4';

export class FilesAzureService {
  private async getBlobServiceInstance() {
    const connectionString = appEnvs.azureStorageConnStr;
    return BlobServiceClient.fromConnectionString(connectionString);
  }

  private async getBlobClient(fileName: string): Promise<BlockBlobClient> {
    const blobService = await this.getBlobServiceInstance();
    const containerClient = blobService.getContainerClient(appEnvs.azStorageContainer);
    return containerClient.getBlockBlobClient(fileName);
  }

  public async uploadFile(file: Express.Multer.File) {
    const extension = file.originalname.split('.').pop();
    const fileName = uuid() + '.' + extension;
    const blockBlobClient = await this.getBlobClient(fileName);
    const fileUrl = blockBlobClient.url;
    await blockBlobClient.uploadData(file.buffer);
    return fileUrl;
  }

  public async deleteFile(fileName: string) {
    const blockBlobClient = await this.getBlobClient(fileName);
    await blockBlobClient.deleteIfExists();
  }
}
