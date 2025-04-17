import { Skeleton } from "@mui/material";

export const SkeletonRow = () => (
    <div className="table-row skeleton-row visible">
      <div className="col title">
        <Skeleton variant="text" height={19} width="50%" />
      </div>
      <div className="col date">
        <Skeleton variant="text" height={19} width="25%" />
      </div>
      <div className="col id">
        <Skeleton variant="text" height={19} width="25%" />
      </div>
    </div>
  );