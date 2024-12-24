# Supported Codecs

| **Component**     | **H264**                          | **H265**                          | **VP8**                           | **VP9**                           | **AV1**                            |
|-------------------|-----------------------------------|-----------------------------------|-----------------------------------|-----------------------------------|-----------------------------------|
| **Encoder**       | openh264enc                       | x265enc                           | vp8enc                            | vp9enc                            | av1enc                            |
|                   | avenc_h264_omx                    |                                   |                                   |                                   | rav1enc                           |
|                   | x264enc                           |                                   |                                   |                                   | svtav1enc                         |
| **Decoder**       | openh264dec                       | libde265dec                       | vp8dec                            | vp9dec                            | av1dec                            |
|                   | avdec_h264                        | avdec_h265                        | avdec_vp8                         | avdec_vp9                         | dav1ddec                          |
| **Parser**        | h264parse                         | h265parse                         |                                   | vp9parse                          | av1parse                          |
| **Payloader**     | rtph264pay                        | rtph265pay                        | rtpvp8pay                         | rtpvp9pay                         | rtpav1pay                         |
| **DePayloader**   | rtph264depay                      | rtph265depay                      | rtpvp8depay                       | rtpvp9depay                       | rtpav1depay                       |
| **Timestamper**   | h264timestamper                   | h265timestamper                   |                                   |                                   |                                   |
| **JSON Codec**    | h2642json                         | h2652json                         | vp82json                          |                                   | av12json                          |
| **Alpha Decoder** |                                   |                                   | vp8alphadecodebin                 | vp9alphadecodebin                 |                                   |
