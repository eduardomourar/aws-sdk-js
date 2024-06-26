import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class CloudHSMV2 extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: CloudHSMV2.Types.ClientConfiguration)
  config: Config & CloudHSMV2.Types.ClientConfiguration;
  /**
   * Copy an CloudHSM cluster backup to a different region.  Cross-account use: No. You cannot perform this operation on an CloudHSM backup in a different Amazon Web Services account.
   */
  copyBackupToRegion(params: CloudHSMV2.Types.CopyBackupToRegionRequest, callback?: (err: AWSError, data: CloudHSMV2.Types.CopyBackupToRegionResponse) => void): Request<CloudHSMV2.Types.CopyBackupToRegionResponse, AWSError>;
  /**
   * Copy an CloudHSM cluster backup to a different region.  Cross-account use: No. You cannot perform this operation on an CloudHSM backup in a different Amazon Web Services account.
   */
  copyBackupToRegion(callback?: (err: AWSError, data: CloudHSMV2.Types.CopyBackupToRegionResponse) => void): Request<CloudHSMV2.Types.CopyBackupToRegionResponse, AWSError>;
  /**
   * Creates a new CloudHSM cluster.  Cross-account use: Yes. To perform this operation with an CloudHSM backup in a different AWS account, specify the full backup ARN in the value of the SourceBackupId parameter.
   */
  createCluster(params: CloudHSMV2.Types.CreateClusterRequest, callback?: (err: AWSError, data: CloudHSMV2.Types.CreateClusterResponse) => void): Request<CloudHSMV2.Types.CreateClusterResponse, AWSError>;
  /**
   * Creates a new CloudHSM cluster.  Cross-account use: Yes. To perform this operation with an CloudHSM backup in a different AWS account, specify the full backup ARN in the value of the SourceBackupId parameter.
   */
  createCluster(callback?: (err: AWSError, data: CloudHSMV2.Types.CreateClusterResponse) => void): Request<CloudHSMV2.Types.CreateClusterResponse, AWSError>;
  /**
   * Creates a new hardware security module (HSM) in the specified CloudHSM cluster.  Cross-account use: No. You cannot perform this operation on an CloudHSM cluster in a different Amazon Web Service account.
   */
  createHsm(params: CloudHSMV2.Types.CreateHsmRequest, callback?: (err: AWSError, data: CloudHSMV2.Types.CreateHsmResponse) => void): Request<CloudHSMV2.Types.CreateHsmResponse, AWSError>;
  /**
   * Creates a new hardware security module (HSM) in the specified CloudHSM cluster.  Cross-account use: No. You cannot perform this operation on an CloudHSM cluster in a different Amazon Web Service account.
   */
  createHsm(callback?: (err: AWSError, data: CloudHSMV2.Types.CreateHsmResponse) => void): Request<CloudHSMV2.Types.CreateHsmResponse, AWSError>;
  /**
   * Deletes a specified CloudHSM backup. A backup can be restored up to 7 days after the DeleteBackup request is made. For more information on restoring a backup, see RestoreBackup.  Cross-account use: No. You cannot perform this operation on an CloudHSM backup in a different Amazon Web Services account.
   */
  deleteBackup(params: CloudHSMV2.Types.DeleteBackupRequest, callback?: (err: AWSError, data: CloudHSMV2.Types.DeleteBackupResponse) => void): Request<CloudHSMV2.Types.DeleteBackupResponse, AWSError>;
  /**
   * Deletes a specified CloudHSM backup. A backup can be restored up to 7 days after the DeleteBackup request is made. For more information on restoring a backup, see RestoreBackup.  Cross-account use: No. You cannot perform this operation on an CloudHSM backup in a different Amazon Web Services account.
   */
  deleteBackup(callback?: (err: AWSError, data: CloudHSMV2.Types.DeleteBackupResponse) => void): Request<CloudHSMV2.Types.DeleteBackupResponse, AWSError>;
  /**
   * Deletes the specified CloudHSM cluster. Before you can delete a cluster, you must delete all HSMs in the cluster. To see if the cluster contains any HSMs, use DescribeClusters. To delete an HSM, use DeleteHsm.  Cross-account use: No. You cannot perform this operation on an CloudHSM cluster in a different Amazon Web Services account.
   */
  deleteCluster(params: CloudHSMV2.Types.DeleteClusterRequest, callback?: (err: AWSError, data: CloudHSMV2.Types.DeleteClusterResponse) => void): Request<CloudHSMV2.Types.DeleteClusterResponse, AWSError>;
  /**
   * Deletes the specified CloudHSM cluster. Before you can delete a cluster, you must delete all HSMs in the cluster. To see if the cluster contains any HSMs, use DescribeClusters. To delete an HSM, use DeleteHsm.  Cross-account use: No. You cannot perform this operation on an CloudHSM cluster in a different Amazon Web Services account.
   */
  deleteCluster(callback?: (err: AWSError, data: CloudHSMV2.Types.DeleteClusterResponse) => void): Request<CloudHSMV2.Types.DeleteClusterResponse, AWSError>;
  /**
   * Deletes the specified HSM. To specify an HSM, you can use its identifier (ID), the IP address of the HSM's elastic network interface (ENI), or the ID of the HSM's ENI. You need to specify only one of these values. To find these values, use DescribeClusters.  Cross-account use: No. You cannot perform this operation on an CloudHSM hsm in a different Amazon Web Services account.
   */
  deleteHsm(params: CloudHSMV2.Types.DeleteHsmRequest, callback?: (err: AWSError, data: CloudHSMV2.Types.DeleteHsmResponse) => void): Request<CloudHSMV2.Types.DeleteHsmResponse, AWSError>;
  /**
   * Deletes the specified HSM. To specify an HSM, you can use its identifier (ID), the IP address of the HSM's elastic network interface (ENI), or the ID of the HSM's ENI. You need to specify only one of these values. To find these values, use DescribeClusters.  Cross-account use: No. You cannot perform this operation on an CloudHSM hsm in a different Amazon Web Services account.
   */
  deleteHsm(callback?: (err: AWSError, data: CloudHSMV2.Types.DeleteHsmResponse) => void): Request<CloudHSMV2.Types.DeleteHsmResponse, AWSError>;
  /**
   *  Deletes an CloudHSM resource policy. Deleting a resource policy will result in the resource being unshared and removed from any RAM resource shares. Deleting the resource policy attached to a backup will not impact any clusters created from that backup.  Cross-account use: No. You cannot perform this operation on an CloudHSM resource in a different Amazon Web Services account.
   */
  deleteResourcePolicy(params: CloudHSMV2.Types.DeleteResourcePolicyRequest, callback?: (err: AWSError, data: CloudHSMV2.Types.DeleteResourcePolicyResponse) => void): Request<CloudHSMV2.Types.DeleteResourcePolicyResponse, AWSError>;
  /**
   *  Deletes an CloudHSM resource policy. Deleting a resource policy will result in the resource being unshared and removed from any RAM resource shares. Deleting the resource policy attached to a backup will not impact any clusters created from that backup.  Cross-account use: No. You cannot perform this operation on an CloudHSM resource in a different Amazon Web Services account.
   */
  deleteResourcePolicy(callback?: (err: AWSError, data: CloudHSMV2.Types.DeleteResourcePolicyResponse) => void): Request<CloudHSMV2.Types.DeleteResourcePolicyResponse, AWSError>;
  /**
   * Gets information about backups of CloudHSM clusters. Lists either the backups you own or the backups shared with you when the Shared parameter is true. This is a paginated operation, which means that each response might contain only a subset of all the backups. When the response contains only a subset of backups, it includes a NextToken value. Use this value in a subsequent DescribeBackups request to get more backups. When you receive a response with no NextToken (or an empty or null value), that means there are no more backups to get.  Cross-account use: Yes. Customers can describe backups in other Amazon Web Services accounts that are shared with them.
   */
  describeBackups(params: CloudHSMV2.Types.DescribeBackupsRequest, callback?: (err: AWSError, data: CloudHSMV2.Types.DescribeBackupsResponse) => void): Request<CloudHSMV2.Types.DescribeBackupsResponse, AWSError>;
  /**
   * Gets information about backups of CloudHSM clusters. Lists either the backups you own or the backups shared with you when the Shared parameter is true. This is a paginated operation, which means that each response might contain only a subset of all the backups. When the response contains only a subset of backups, it includes a NextToken value. Use this value in a subsequent DescribeBackups request to get more backups. When you receive a response with no NextToken (or an empty or null value), that means there are no more backups to get.  Cross-account use: Yes. Customers can describe backups in other Amazon Web Services accounts that are shared with them.
   */
  describeBackups(callback?: (err: AWSError, data: CloudHSMV2.Types.DescribeBackupsResponse) => void): Request<CloudHSMV2.Types.DescribeBackupsResponse, AWSError>;
  /**
   * Gets information about CloudHSM clusters. This is a paginated operation, which means that each response might contain only a subset of all the clusters. When the response contains only a subset of clusters, it includes a NextToken value. Use this value in a subsequent DescribeClusters request to get more clusters. When you receive a response with no NextToken (or an empty or null value), that means there are no more clusters to get.  Cross-account use: No. You cannot perform this operation on CloudHSM clusters in a different Amazon Web Services account.
   */
  describeClusters(params: CloudHSMV2.Types.DescribeClustersRequest, callback?: (err: AWSError, data: CloudHSMV2.Types.DescribeClustersResponse) => void): Request<CloudHSMV2.Types.DescribeClustersResponse, AWSError>;
  /**
   * Gets information about CloudHSM clusters. This is a paginated operation, which means that each response might contain only a subset of all the clusters. When the response contains only a subset of clusters, it includes a NextToken value. Use this value in a subsequent DescribeClusters request to get more clusters. When you receive a response with no NextToken (or an empty or null value), that means there are no more clusters to get.  Cross-account use: No. You cannot perform this operation on CloudHSM clusters in a different Amazon Web Services account.
   */
  describeClusters(callback?: (err: AWSError, data: CloudHSMV2.Types.DescribeClustersResponse) => void): Request<CloudHSMV2.Types.DescribeClustersResponse, AWSError>;
  /**
   *  Retrieves the resource policy document attached to a given resource.   Cross-account use: No. You cannot perform this operation on an CloudHSM resource in a different Amazon Web Services account.
   */
  getResourcePolicy(params: CloudHSMV2.Types.GetResourcePolicyRequest, callback?: (err: AWSError, data: CloudHSMV2.Types.GetResourcePolicyResponse) => void): Request<CloudHSMV2.Types.GetResourcePolicyResponse, AWSError>;
  /**
   *  Retrieves the resource policy document attached to a given resource.   Cross-account use: No. You cannot perform this operation on an CloudHSM resource in a different Amazon Web Services account.
   */
  getResourcePolicy(callback?: (err: AWSError, data: CloudHSMV2.Types.GetResourcePolicyResponse) => void): Request<CloudHSMV2.Types.GetResourcePolicyResponse, AWSError>;
  /**
   * Claims an CloudHSM cluster by submitting the cluster certificate issued by your issuing certificate authority (CA) and the CA's root certificate. Before you can claim a cluster, you must sign the cluster's certificate signing request (CSR) with your issuing CA. To get the cluster's CSR, use DescribeClusters.  Cross-account use: No. You cannot perform this operation on an CloudHSM cluster in a different Amazon Web Services account.
   */
  initializeCluster(params: CloudHSMV2.Types.InitializeClusterRequest, callback?: (err: AWSError, data: CloudHSMV2.Types.InitializeClusterResponse) => void): Request<CloudHSMV2.Types.InitializeClusterResponse, AWSError>;
  /**
   * Claims an CloudHSM cluster by submitting the cluster certificate issued by your issuing certificate authority (CA) and the CA's root certificate. Before you can claim a cluster, you must sign the cluster's certificate signing request (CSR) with your issuing CA. To get the cluster's CSR, use DescribeClusters.  Cross-account use: No. You cannot perform this operation on an CloudHSM cluster in a different Amazon Web Services account.
   */
  initializeCluster(callback?: (err: AWSError, data: CloudHSMV2.Types.InitializeClusterResponse) => void): Request<CloudHSMV2.Types.InitializeClusterResponse, AWSError>;
  /**
   * Gets a list of tags for the specified CloudHSM cluster. This is a paginated operation, which means that each response might contain only a subset of all the tags. When the response contains only a subset of tags, it includes a NextToken value. Use this value in a subsequent ListTags request to get more tags. When you receive a response with no NextToken (or an empty or null value), that means there are no more tags to get.  Cross-account use: No. You cannot perform this operation on an CloudHSM resource in a different Amazon Web Services account.
   */
  listTags(params: CloudHSMV2.Types.ListTagsRequest, callback?: (err: AWSError, data: CloudHSMV2.Types.ListTagsResponse) => void): Request<CloudHSMV2.Types.ListTagsResponse, AWSError>;
  /**
   * Gets a list of tags for the specified CloudHSM cluster. This is a paginated operation, which means that each response might contain only a subset of all the tags. When the response contains only a subset of tags, it includes a NextToken value. Use this value in a subsequent ListTags request to get more tags. When you receive a response with no NextToken (or an empty or null value), that means there are no more tags to get.  Cross-account use: No. You cannot perform this operation on an CloudHSM resource in a different Amazon Web Services account.
   */
  listTags(callback?: (err: AWSError, data: CloudHSMV2.Types.ListTagsResponse) => void): Request<CloudHSMV2.Types.ListTagsResponse, AWSError>;
  /**
   * Modifies attributes for CloudHSM backup.  Cross-account use: No. You cannot perform this operation on an CloudHSM backup in a different Amazon Web Services account.
   */
  modifyBackupAttributes(params: CloudHSMV2.Types.ModifyBackupAttributesRequest, callback?: (err: AWSError, data: CloudHSMV2.Types.ModifyBackupAttributesResponse) => void): Request<CloudHSMV2.Types.ModifyBackupAttributesResponse, AWSError>;
  /**
   * Modifies attributes for CloudHSM backup.  Cross-account use: No. You cannot perform this operation on an CloudHSM backup in a different Amazon Web Services account.
   */
  modifyBackupAttributes(callback?: (err: AWSError, data: CloudHSMV2.Types.ModifyBackupAttributesResponse) => void): Request<CloudHSMV2.Types.ModifyBackupAttributesResponse, AWSError>;
  /**
   * Modifies CloudHSM cluster.  Cross-account use: No. You cannot perform this operation on an CloudHSM cluster in a different Amazon Web Services account.
   */
  modifyCluster(params: CloudHSMV2.Types.ModifyClusterRequest, callback?: (err: AWSError, data: CloudHSMV2.Types.ModifyClusterResponse) => void): Request<CloudHSMV2.Types.ModifyClusterResponse, AWSError>;
  /**
   * Modifies CloudHSM cluster.  Cross-account use: No. You cannot perform this operation on an CloudHSM cluster in a different Amazon Web Services account.
   */
  modifyCluster(callback?: (err: AWSError, data: CloudHSMV2.Types.ModifyClusterResponse) => void): Request<CloudHSMV2.Types.ModifyClusterResponse, AWSError>;
  /**
   * Creates or updates an CloudHSM resource policy. A resource policy helps you to define the IAM entity (for example, an Amazon Web Services account) that can manage your CloudHSM resources. The following resources support CloudHSM resource policies:     Backup - The resource policy allows you to describe the backup and restore a cluster from the backup in another Amazon Web Services account.   In order to share a backup, it must be in a 'READY' state and you must own it.  While you can share a backup using the CloudHSM PutResourcePolicy operation, we recommend using Resource Access Manager (RAM) instead. Using RAM provides multiple benefits as it creates the policy for you, allows multiple resources to be shared at one time, and increases the discoverability of shared resources. If you use PutResourcePolicy and want consumers to be able to describe the backups you share with them, you must promote the backup to a standard RAM Resource Share using the RAM PromoteResourceShareCreatedFromPolicy API operation. For more information, see  Working with shared backups in the CloudHSM User Guide   Cross-account use: No. You cannot perform this operation on an CloudHSM resource in a different Amazon Web Services account.
   */
  putResourcePolicy(params: CloudHSMV2.Types.PutResourcePolicyRequest, callback?: (err: AWSError, data: CloudHSMV2.Types.PutResourcePolicyResponse) => void): Request<CloudHSMV2.Types.PutResourcePolicyResponse, AWSError>;
  /**
   * Creates or updates an CloudHSM resource policy. A resource policy helps you to define the IAM entity (for example, an Amazon Web Services account) that can manage your CloudHSM resources. The following resources support CloudHSM resource policies:     Backup - The resource policy allows you to describe the backup and restore a cluster from the backup in another Amazon Web Services account.   In order to share a backup, it must be in a 'READY' state and you must own it.  While you can share a backup using the CloudHSM PutResourcePolicy operation, we recommend using Resource Access Manager (RAM) instead. Using RAM provides multiple benefits as it creates the policy for you, allows multiple resources to be shared at one time, and increases the discoverability of shared resources. If you use PutResourcePolicy and want consumers to be able to describe the backups you share with them, you must promote the backup to a standard RAM Resource Share using the RAM PromoteResourceShareCreatedFromPolicy API operation. For more information, see  Working with shared backups in the CloudHSM User Guide   Cross-account use: No. You cannot perform this operation on an CloudHSM resource in a different Amazon Web Services account.
   */
  putResourcePolicy(callback?: (err: AWSError, data: CloudHSMV2.Types.PutResourcePolicyResponse) => void): Request<CloudHSMV2.Types.PutResourcePolicyResponse, AWSError>;
  /**
   * Restores a specified CloudHSM backup that is in the PENDING_DELETION state. For more information on deleting a backup, see DeleteBackup.  Cross-account use: No. You cannot perform this operation on an CloudHSM backup in a different Amazon Web Services account.
   */
  restoreBackup(params: CloudHSMV2.Types.RestoreBackupRequest, callback?: (err: AWSError, data: CloudHSMV2.Types.RestoreBackupResponse) => void): Request<CloudHSMV2.Types.RestoreBackupResponse, AWSError>;
  /**
   * Restores a specified CloudHSM backup that is in the PENDING_DELETION state. For more information on deleting a backup, see DeleteBackup.  Cross-account use: No. You cannot perform this operation on an CloudHSM backup in a different Amazon Web Services account.
   */
  restoreBackup(callback?: (err: AWSError, data: CloudHSMV2.Types.RestoreBackupResponse) => void): Request<CloudHSMV2.Types.RestoreBackupResponse, AWSError>;
  /**
   * Adds or overwrites one or more tags for the specified CloudHSM cluster.  Cross-account use: No. You cannot perform this operation on an CloudHSM resource in a different Amazon Web Services account.
   */
  tagResource(params: CloudHSMV2.Types.TagResourceRequest, callback?: (err: AWSError, data: CloudHSMV2.Types.TagResourceResponse) => void): Request<CloudHSMV2.Types.TagResourceResponse, AWSError>;
  /**
   * Adds or overwrites one or more tags for the specified CloudHSM cluster.  Cross-account use: No. You cannot perform this operation on an CloudHSM resource in a different Amazon Web Services account.
   */
  tagResource(callback?: (err: AWSError, data: CloudHSMV2.Types.TagResourceResponse) => void): Request<CloudHSMV2.Types.TagResourceResponse, AWSError>;
  /**
   * Removes the specified tag or tags from the specified CloudHSM cluster.  Cross-account use: No. You cannot perform this operation on an CloudHSM resource in a different Amazon Web Services account.
   */
  untagResource(params: CloudHSMV2.Types.UntagResourceRequest, callback?: (err: AWSError, data: CloudHSMV2.Types.UntagResourceResponse) => void): Request<CloudHSMV2.Types.UntagResourceResponse, AWSError>;
  /**
   * Removes the specified tag or tags from the specified CloudHSM cluster.  Cross-account use: No. You cannot perform this operation on an CloudHSM resource in a different Amazon Web Services account.
   */
  untagResource(callback?: (err: AWSError, data: CloudHSMV2.Types.UntagResourceResponse) => void): Request<CloudHSMV2.Types.UntagResourceResponse, AWSError>;
}
declare namespace CloudHSMV2 {
  export interface Backup {
    /**
     * The identifier (ID) of the backup.
     */
    BackupId: BackupId;
    /**
     * The Amazon Resource Name (ARN) of the backup.
     */
    BackupArn?: BackupArn;
    /**
     * The state of the backup.
     */
    BackupState?: BackupState;
    /**
     * The identifier (ID) of the cluster that was backed up.
     */
    ClusterId?: ClusterId;
    /**
     * The date and time when the backup was created.
     */
    CreateTimestamp?: Timestamp;
    /**
     * The date and time when the backup was copied from a source backup.
     */
    CopyTimestamp?: Timestamp;
    /**
     * Specifies whether the service should exempt a backup from the retention policy for the cluster. True exempts a backup from the retention policy. False means the service applies the backup retention policy defined at the cluster.
     */
    NeverExpires?: Boolean;
    /**
     * The AWS Region that contains the source backup from which the new backup was copied.
     */
    SourceRegion?: Region;
    /**
     * The identifier (ID) of the source backup from which the new backup was copied.
     */
    SourceBackup?: BackupId;
    /**
     * The identifier (ID) of the cluster containing the source backup from which the new backup was copied.
     */
    SourceCluster?: ClusterId;
    /**
     * The date and time when the backup will be permanently deleted.
     */
    DeleteTimestamp?: Timestamp;
    /**
     * The list of tags for the backup.
     */
    TagList?: TagList;
    /**
     * The HSM type used to create the backup.
     */
    HsmType?: HsmType;
    /**
     * The mode of the cluster that was backed up.
     */
    Mode?: ClusterMode;
  }
  export type BackupArn = string;
  export type BackupId = string;
  export type BackupPolicy = "DEFAULT"|string;
  export interface BackupRetentionPolicy {
    /**
     * The type of backup retention policy. For the DAYS type, the value is the number of days to retain backups.
     */
    Type?: BackupRetentionType;
    /**
     * Use a value between 7 - 379.
     */
    Value?: BackupRetentionValue;
  }
  export type BackupRetentionType = "DAYS"|string;
  export type BackupRetentionValue = string;
  export type BackupState = "CREATE_IN_PROGRESS"|"READY"|"DELETED"|"PENDING_DELETION"|string;
  export type Backups = Backup[];
  export type BackupsMaxSize = number;
  export type Boolean = boolean;
  export type Cert = string;
  export interface Certificates {
    /**
     * The cluster's certificate signing request (CSR). The CSR exists only when the cluster's state is UNINITIALIZED.
     */
    ClusterCsr?: Cert;
    /**
     * The HSM certificate issued (signed) by the HSM hardware.
     */
    HsmCertificate?: Cert;
    /**
     * The HSM hardware certificate issued (signed) by CloudHSM.
     */
    AwsHardwareCertificate?: Cert;
    /**
     * The HSM hardware certificate issued (signed) by the hardware manufacturer.
     */
    ManufacturerHardwareCertificate?: Cert;
    /**
     * The cluster certificate issued (signed) by the issuing certificate authority (CA) of the cluster's owner.
     */
    ClusterCertificate?: Cert;
  }
  export type CloudHsmArn = string;
  export interface Cluster {
    /**
     * The cluster's backup policy.
     */
    BackupPolicy?: BackupPolicy;
    /**
     * A policy that defines how the service retains backups.
     */
    BackupRetentionPolicy?: BackupRetentionPolicy;
    /**
     * The cluster's identifier (ID).
     */
    ClusterId?: ClusterId;
    /**
     * The date and time when the cluster was created.
     */
    CreateTimestamp?: Timestamp;
    /**
     * Contains information about the HSMs in the cluster.
     */
    Hsms?: Hsms;
    /**
     * The type of HSM that the cluster contains.
     */
    HsmType?: HsmType;
    /**
     * The default password for the cluster's Pre-Crypto Officer (PRECO) user.
     */
    PreCoPassword?: PreCoPassword;
    /**
     * The identifier (ID) of the cluster's security group.
     */
    SecurityGroup?: SecurityGroup;
    /**
     * The identifier (ID) of the backup used to create the cluster. This value exists only when the cluster was created from a backup.
     */
    SourceBackupId?: BackupId;
    /**
     * The cluster's state.
     */
    State?: ClusterState;
    /**
     * A description of the cluster's state.
     */
    StateMessage?: StateMessage;
    /**
     * A map from availability zone to the cluster’s subnet in that availability zone.
     */
    SubnetMapping?: ExternalSubnetMapping;
    /**
     * The identifier (ID) of the virtual private cloud (VPC) that contains the cluster.
     */
    VpcId?: VpcId;
    /**
     * Contains one or more certificates or a certificate signing request (CSR).
     */
    Certificates?: Certificates;
    /**
     * The list of tags for the cluster.
     */
    TagList?: TagList;
    /**
     * The mode of the cluster.
     */
    Mode?: ClusterMode;
  }
  export type ClusterId = string;
  export type ClusterMode = "FIPS"|"NON_FIPS"|string;
  export type ClusterState = "CREATE_IN_PROGRESS"|"UNINITIALIZED"|"INITIALIZE_IN_PROGRESS"|"INITIALIZED"|"ACTIVE"|"UPDATE_IN_PROGRESS"|"DELETE_IN_PROGRESS"|"DELETED"|"DEGRADED"|string;
  export type Clusters = Cluster[];
  export type ClustersMaxSize = number;
  export interface CopyBackupToRegionRequest {
    /**
     * The AWS region that will contain your copied CloudHSM cluster backup.
     */
    DestinationRegion: Region;
    /**
     * The ID of the backup that will be copied to the destination region. 
     */
    BackupId: BackupId;
    /**
     * Tags to apply to the destination backup during creation. If you specify tags, only these tags will be applied to the destination backup. If you do not specify tags, the service copies tags from the source backup to the destination backup.
     */
    TagList?: TagList;
  }
  export interface CopyBackupToRegionResponse {
    /**
     * Information on the backup that will be copied to the destination region, including CreateTimestamp, SourceBackup, SourceCluster, and Source Region. CreateTimestamp of the destination backup will be the same as that of the source backup. You will need to use the sourceBackupID returned in this operation to use the DescribeBackups operation on the backup that will be copied to the destination region.
     */
    DestinationBackup?: DestinationBackup;
  }
  export interface CreateClusterRequest {
    /**
     * A policy that defines how the service retains backups.
     */
    BackupRetentionPolicy?: BackupRetentionPolicy;
    /**
     * The type of HSM to use in the cluster. The allowed values are hsm1.medium and hsm2m.medium.
     */
    HsmType: HsmType;
    /**
     * The identifier (ID) or the Amazon Resource Name (ARN) of the cluster backup to restore. Use this value to restore the cluster from a backup instead of creating a new cluster. To find the backup ID or ARN, use DescribeBackups. If using a backup in another account, the full ARN must be supplied. 
     */
    SourceBackupId?: BackupArn;
    /**
     * The identifiers (IDs) of the subnets where you are creating the cluster. You must specify at least one subnet. If you specify multiple subnets, they must meet the following criteria:   All subnets must be in the same virtual private cloud (VPC).   You can specify only one subnet per Availability Zone.  
     */
    SubnetIds: SubnetIds;
    /**
     * Tags to apply to the CloudHSM cluster during creation.
     */
    TagList?: TagList;
    /**
     * The mode to use in the cluster. The allowed values are FIPS and NON_FIPS.
     */
    Mode?: ClusterMode;
  }
  export interface CreateClusterResponse {
    /**
     * Information about the cluster that was created.
     */
    Cluster?: Cluster;
  }
  export interface CreateHsmRequest {
    /**
     * The identifier (ID) of the HSM's cluster. To find the cluster ID, use DescribeClusters.
     */
    ClusterId: ClusterId;
    /**
     * The Availability Zone where you are creating the HSM. To find the cluster's Availability Zones, use DescribeClusters.
     */
    AvailabilityZone: ExternalAz;
    /**
     * The HSM's IP address. If you specify an IP address, use an available address from the subnet that maps to the Availability Zone where you are creating the HSM. If you don't specify an IP address, one is chosen for you from that subnet.
     */
    IpAddress?: IpAddress;
  }
  export interface CreateHsmResponse {
    /**
     * Information about the HSM that was created.
     */
    Hsm?: Hsm;
  }
  export interface DeleteBackupRequest {
    /**
     * The ID of the backup to be deleted. To find the ID of a backup, use the DescribeBackups operation.
     */
    BackupId: BackupId;
  }
  export interface DeleteBackupResponse {
    /**
     * Information on the Backup object deleted.
     */
    Backup?: Backup;
  }
  export interface DeleteClusterRequest {
    /**
     * The identifier (ID) of the cluster that you are deleting. To find the cluster ID, use DescribeClusters.
     */
    ClusterId: ClusterId;
  }
  export interface DeleteClusterResponse {
    /**
     * Information about the cluster that was deleted.
     */
    Cluster?: Cluster;
  }
  export interface DeleteHsmRequest {
    /**
     * The identifier (ID) of the cluster that contains the HSM that you are deleting.
     */
    ClusterId: ClusterId;
    /**
     * The identifier (ID) of the HSM that you are deleting.
     */
    HsmId?: HsmId;
    /**
     * The identifier (ID) of the elastic network interface (ENI) of the HSM that you are deleting.
     */
    EniId?: EniId;
    /**
     * The IP address of the elastic network interface (ENI) of the HSM that you are deleting.
     */
    EniIp?: IpAddress;
  }
  export interface DeleteHsmResponse {
    /**
     * The identifier (ID) of the HSM that was deleted.
     */
    HsmId?: HsmId;
  }
  export interface DeleteResourcePolicyRequest {
    /**
     * Amazon Resource Name (ARN) of the resource from which the policy will be removed. 
     */
    ResourceArn?: CloudHsmArn;
  }
  export interface DeleteResourcePolicyResponse {
    /**
     * Amazon Resource Name (ARN) of the resource from which the policy was deleted. 
     */
    ResourceArn?: CloudHsmArn;
    /**
     * The policy previously attached to the resource.
     */
    Policy?: ResourcePolicy;
  }
  export interface DescribeBackupsRequest {
    /**
     * The NextToken value that you received in the previous response. Use this value to get more backups.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of backups to return in the response. When there are more backups than the number you specify, the response contains a NextToken value.
     */
    MaxResults?: BackupsMaxSize;
    /**
     * One or more filters to limit the items returned in the response. Use the backupIds filter to return only the specified backups. Specify backups by their backup identifier (ID). Use the sourceBackupIds filter to return only the backups created from a source backup. The sourceBackupID of a source backup is returned by the CopyBackupToRegion operation. Use the clusterIds filter to return only the backups for the specified clusters. Specify clusters by their cluster identifier (ID). Use the states filter to return only backups that match the specified state. Use the neverExpires filter to return backups filtered by the value in the neverExpires parameter. True returns all backups exempt from the backup retention policy. False returns all backups with a backup retention policy defined at the cluster.
     */
    Filters?: Filters;
    /**
     * Describe backups that are shared with you.  By default when using this option, the command returns backups that have been shared using a standard Resource Access Manager resource share. In order for a backup that was shared using the PutResourcePolicy command to be returned, the share must be promoted to a standard resource share using the RAM PromoteResourceShareCreatedFromPolicy API operation. For more information about sharing backups, see  Working with shared backups in the CloudHSM User Guide. 
     */
    Shared?: Boolean;
    /**
     * Designates whether or not to sort the return backups by ascending chronological order of generation.
     */
    SortAscending?: Boolean;
  }
  export interface DescribeBackupsResponse {
    /**
     * A list of backups.
     */
    Backups?: Backups;
    /**
     * An opaque string that indicates that the response contains only a subset of backups. Use this value in a subsequent DescribeBackups request to get more backups.
     */
    NextToken?: NextToken;
  }
  export interface DescribeClustersRequest {
    /**
     * One or more filters to limit the items returned in the response. Use the clusterIds filter to return only the specified clusters. Specify clusters by their cluster identifier (ID). Use the vpcIds filter to return only the clusters in the specified virtual private clouds (VPCs). Specify VPCs by their VPC identifier (ID). Use the states filter to return only clusters that match the specified state.
     */
    Filters?: Filters;
    /**
     * The NextToken value that you received in the previous response. Use this value to get more clusters.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of clusters to return in the response. When there are more clusters than the number you specify, the response contains a NextToken value.
     */
    MaxResults?: ClustersMaxSize;
  }
  export interface DescribeClustersResponse {
    /**
     * A list of clusters.
     */
    Clusters?: Clusters;
    /**
     * An opaque string that indicates that the response contains only a subset of clusters. Use this value in a subsequent DescribeClusters request to get more clusters.
     */
    NextToken?: NextToken;
  }
  export interface DestinationBackup {
    /**
     * The date and time when both the source backup was created.
     */
    CreateTimestamp?: Timestamp;
    /**
     * The AWS region that contains the source backup from which the new backup was copied.
     */
    SourceRegion?: Region;
    /**
     * The identifier (ID) of the source backup from which the new backup was copied.
     */
    SourceBackup?: BackupId;
    /**
     * The identifier (ID) of the cluster containing the source backup from which the new backup was copied.
     */
    SourceCluster?: ClusterId;
  }
  export type EniId = string;
  export type ExternalAz = string;
  export type ExternalSubnetMapping = {[key: string]: SubnetId};
  export type Field = string;
  export type Filters = {[key: string]: Strings};
  export interface GetResourcePolicyRequest {
    /**
     * Amazon Resource Name (ARN) of the resource to which a policy is attached.
     */
    ResourceArn?: CloudHsmArn;
  }
  export interface GetResourcePolicyResponse {
    /**
     * The policy attached to a resource.
     */
    Policy?: ResourcePolicy;
  }
  export interface Hsm {
    /**
     * The Availability Zone that contains the HSM.
     */
    AvailabilityZone?: ExternalAz;
    /**
     * The identifier (ID) of the cluster that contains the HSM.
     */
    ClusterId?: ClusterId;
    /**
     * The subnet that contains the HSM's elastic network interface (ENI).
     */
    SubnetId?: SubnetId;
    /**
     * The identifier (ID) of the HSM's elastic network interface (ENI).
     */
    EniId?: EniId;
    /**
     * The IP address of the HSM's elastic network interface (ENI).
     */
    EniIp?: IpAddress;
    /**
     * The HSM's identifier (ID).
     */
    HsmId: HsmId;
    /**
     * The HSM's state.
     */
    State?: HsmState;
    /**
     * A description of the HSM's state.
     */
    StateMessage?: String;
  }
  export type HsmId = string;
  export type HsmState = "CREATE_IN_PROGRESS"|"ACTIVE"|"DEGRADED"|"DELETE_IN_PROGRESS"|"DELETED"|string;
  export type HsmType = string;
  export type Hsms = Hsm[];
  export interface InitializeClusterRequest {
    /**
     * The identifier (ID) of the cluster that you are claiming. To find the cluster ID, use DescribeClusters.
     */
    ClusterId: ClusterId;
    /**
     * The cluster certificate issued (signed) by your issuing certificate authority (CA). The certificate must be in PEM format and can contain a maximum of 5000 characters.
     */
    SignedCert: Cert;
    /**
     * The issuing certificate of the issuing certificate authority (CA) that issued (signed) the cluster certificate. You must use a self-signed certificate. The certificate used to sign the HSM CSR must be directly available, and thus must be the root certificate. The certificate must be in PEM format and can contain a maximum of 5000 characters.
     */
    TrustAnchor: Cert;
  }
  export interface InitializeClusterResponse {
    /**
     * The cluster's state.
     */
    State?: ClusterState;
    /**
     * A description of the cluster's state.
     */
    StateMessage?: StateMessage;
  }
  export type IpAddress = string;
  export interface ListTagsRequest {
    /**
     * The cluster identifier (ID) for the cluster whose tags you are getting. To find the cluster ID, use DescribeClusters.
     */
    ResourceId: ResourceId;
    /**
     * The NextToken value that you received in the previous response. Use this value to get more tags.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of tags to return in the response. When there are more tags than the number you specify, the response contains a NextToken value.
     */
    MaxResults?: MaxSize;
  }
  export interface ListTagsResponse {
    /**
     * A list of tags.
     */
    TagList: TagList;
    /**
     * An opaque string that indicates that the response contains only a subset of tags. Use this value in a subsequent ListTags request to get more tags.
     */
    NextToken?: NextToken;
  }
  export type MaxSize = number;
  export interface ModifyBackupAttributesRequest {
    /**
     * The identifier (ID) of the backup to modify. To find the ID of a backup, use the DescribeBackups operation.
     */
    BackupId: BackupId;
    /**
     * Specifies whether the service should exempt a backup from the retention policy for the cluster. True exempts a backup from the retention policy. False means the service applies the backup retention policy defined at the cluster.
     */
    NeverExpires: Boolean;
  }
  export interface ModifyBackupAttributesResponse {
    Backup?: Backup;
  }
  export interface ModifyClusterRequest {
    /**
     * A policy that defines how the service retains backups.
     */
    BackupRetentionPolicy: BackupRetentionPolicy;
    /**
     * The identifier (ID) of the cluster that you want to modify. To find the cluster ID, use DescribeClusters.
     */
    ClusterId: ClusterId;
  }
  export interface ModifyClusterResponse {
    Cluster?: Cluster;
  }
  export type NextToken = string;
  export type PreCoPassword = string;
  export interface PutResourcePolicyRequest {
    /**
     * Amazon Resource Name (ARN) of the resource to which you want to attach a policy. 
     */
    ResourceArn?: CloudHsmArn;
    /**
     * The policy you want to associate with a resource.  For an example policy, see  Working with shared backups in the CloudHSM User Guide
     */
    Policy?: ResourcePolicy;
  }
  export interface PutResourcePolicyResponse {
    /**
     * Amazon Resource Name (ARN) of the resource to which a policy is attached.
     */
    ResourceArn?: CloudHsmArn;
    /**
     * The policy attached to a resource.
     */
    Policy?: ResourcePolicy;
  }
  export type Region = string;
  export type ResourceId = string;
  export type ResourcePolicy = string;
  export interface RestoreBackupRequest {
    /**
     * The ID of the backup to be restored. To find the ID of a backup, use the DescribeBackups operation.
     */
    BackupId: BackupId;
  }
  export interface RestoreBackupResponse {
    /**
     * Information on the Backup object created.
     */
    Backup?: Backup;
  }
  export type SecurityGroup = string;
  export type StateMessage = string;
  export type String = string;
  export type Strings = String[];
  export type SubnetId = string;
  export type SubnetIds = SubnetId[];
  export interface Tag {
    /**
     * The key of the tag.
     */
    Key: TagKey;
    /**
     * The value of the tag.
     */
    Value: TagValue;
  }
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export type TagList = Tag[];
  export interface TagResourceRequest {
    /**
     * The cluster identifier (ID) for the cluster that you are tagging. To find the cluster ID, use DescribeClusters.
     */
    ResourceId: ResourceId;
    /**
     * A list of one or more tags.
     */
    TagList: TagList;
  }
  export interface TagResourceResponse {
  }
  export type TagValue = string;
  export type Timestamp = Date;
  export interface UntagResourceRequest {
    /**
     * The cluster identifier (ID) for the cluster whose tags you are removing. To find the cluster ID, use DescribeClusters.
     */
    ResourceId: ResourceId;
    /**
     * A list of one or more tag keys for the tags that you are removing. Specify only the tag keys, not the tag values.
     */
    TagKeyList: TagKeyList;
  }
  export interface UntagResourceResponse {
  }
  export type VpcId = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2017-04-28"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the CloudHSMV2 client.
   */
  export import Types = CloudHSMV2;
}
export = CloudHSMV2;
