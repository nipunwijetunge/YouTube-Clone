import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const { id } = useParams();

  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  console.log(channelDetail);

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet,statistics&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0]),
    );

    fetchFromAPI(`search?channelId=${id}&part=snippet,id&order=date`).then(
      (data) => setVideos(data?.items),
    );
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,9,100,0.9517601656626506) 0%, rgba(0,212,255,1) 88%)",
            zIndex: 10,
            height: "300px",
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
      </Box>
      <Box display="flex" px="17px">
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
