import LoginedHeader from "../layouts/LoginedHeader";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import {
  BsFillEmojiSmileFill,
  BsChevronLeft,
  BsChevronRight,
} from "react-icons/bs";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { FiHeart } from "react-icons/fi";
const ProductPost = ({ logined, setLogined, onLike, liked, setLiked }) => {
  const { num } = useParams();

  const navigate = useNavigate();
  const moveBack = () => {
    navigate(-1);
  };
  const [article, setArticle] = useState("");
  const onLikes = (data) => {
    setLiked(data);
  };
  useEffect(() => {
    const onSubmit = async (num) => {
      try {
        const data = await axios({
          url: `http://localhost:8083/product/${num}`,
          method: "GET",
        });
        onArticle(data.data);
      } catch (e) {
        console.log(e);
        window.alert("존재하지 않는 게시물입니다");
        moveBack();
      }
      try {
        const data = await axios({
          url: `http://localhost:8083/likeProductCheck/${num}`,
          method: "GET",
          params: {
            productId: num,
            userid: sessionStorage.getItem("userid"),
          },
        });
        onLikes(data.data);
      } catch (e) {
        console.log(e);
      }
    };
    onSubmit(num);
  }, []);

  const onArticle = (data) => {
    setArticle((prev) => data);
  };

  const onLikeRe = async (num) => {
    try {
      const data = await axios({
        url: `http://localhost:8083/product/${num}`,
        method: "GET",
      });
      onArticle(data.data);
      console.log(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  if (logined) {
    return (
      <div>
        <LoginedHeader />

        <div
          style={{
            width: "700px",
            margin: "0 auto",
          }}
        >
          <div className="mt-5 relative">
            <button
              className="font-bold absolute"
              style={{
                fontSize: "1.3rem",
                top: "50%",
                left: "-5%",
              }}
            >
              <BsChevronLeft />
            </button>
            <button
              className="font-bold absolute "
              style={{
                fontSize: "1.3rem",

                top: "50%",
                right: "-5%",
              }}
            >
              <BsChevronRight />
            </button>
            <a href="#">
              <img
                className="rounded-lg"
                src="https://dnvefa72aowie.cloudfront.net/origin/article/202210/83cbd5362a585918a9b4a7354984ecbfb20208da27522d9b39579099b2cfe1f9.webp?q=95&s=1440x1440&t=inside"
                alt=""
              />
            </a>
          </div>
          <section className="mt-6 flex justify-end gap-3">
            <div
              className="avatar flex justify-center items-center"
              style={{
                width: "3.5rem",
              }}
            >
              <div className="w-12 rounded-full">
                <img src="https://placeimg.com/192/192/people" />
              </div>
            </div>
            <div
              className="flex justify-center flex-col"
              style={{
                width: "500px",
              }}
            >
              <div className="font-bold ">nickname</div>
              <div className="text-sm">대전광역시 서구 둔산동</div>
            </div>

            <div
              style={{
                width: "200px",
              }}
            >
              <div className="flex gap-2">
                <div>
                  <div
                    className="font-bold flex justify-end p-1 "
                    style={{
                      color: "green",
                    }}
                  >
                    38.8
                  </div>
                  <progress
                    className="flex progress progress-success w-32"
                    value="40"
                    max="100"
                  ></progress>
                </div>
                <div
                  className="flex"
                  style={{
                    color: "green",
                    fontSize: "1.75rem",
                  }}
                >
                  <BsFillEmojiSmileFill />
                </div>
              </div>
              <div
                className="text-sm flex justify-end"
                style={{
                  color: "gray",
                }}
              >
                매너온도
              </div>
            </div>
          </section>
          <br />
          <div
            style={{
              width: "700px",
              borderBottom: "1px #e4e4e4 solid",
            }}
          ></div>
          <section>
            <div className="mt-6">
              <div
                className="font-bold"
                style={{
                  fontSize: "1.25rem",
                }}
              >
                {article.productSubject}
              </div>
              <div className="flex gap-2">
                <div
                  className="text-sm"
                  style={{
                    color: "gray",
                  }}
                >
                  {article.productCategory}
                </div>
                <div
                  className="text-sm"
                  style={{
                    color: "gray",
                  }}
                >
                  {article.productCreateTime}
                </div>
              </div>
              <div
                className="font-bold"
                style={{
                  fontSize: "1.25rem",
                }}
              >
                {article.productPrice}원
              </div>
            </div>
            <br />
            <div>
              <div>{article.productContent}</div>
              <div
                className="flex text-sm gap-2 my-5"
                style={{
                  color: "gray",
                }}
              >
                <span>관심</span>
                <div>{article.productLike}</div>
                <span>채팅</span>
                <div>{article.productChatting}</div>
                <span>조회</span>
                <div>{article.productView}</div>
              </div>
            </div>
          </section>
          <br />
          <section>
            <div className="py-2 flex gap-5 justify-end" style={{}}>
              <button
                style={{
                  fontSize: "1.5rem",
                }}
                onClick={() => {
                  onLike(num, sessionStorage.getItem("userid"));
                  onLikeRe(num);
                }}
              >
                {liked ? (
                  <FiHeart
                    style={{
                      color: "pink",
                    }}
                  />
                ) : (
                  <FiHeart />
                )}
              </button>

              <a
                href="#"
                className="rounded p-2 font-bold flex justify-center"
                style={{
                  width: "300px",
                  color: "white",
                  backgroundColor: "#fc9d39",
                }}
              >
                채팅하기{" "}
              </a>
            </div>
          </section>
          <br />
          <div
            style={{
              width: "700px",
              borderBottom: "1px #e4e4e4 solid",
            }}
          ></div>
          <section>
            <div>
              <div className="py-9 flex justify-between">
                <div
                  className="font-bold"
                  style={{
                    fontSize: "1.1rem",
                  }}
                >
                  당근마켓 인기중고
                </div>
                <div
                  className=""
                  style={{
                    color: "#FF7F3F",
                  }}
                >
                  <a href="#">더 구경하기</a>
                </div>
              </div>
              <div>
                <div>
                  <ul
                    className="grid grid-cols-3"
                    style={{
                      maxWidth: "1000px",
                      margin: "0 auto",
                    }}
                  >
                    <li
                      style={{
                        paddingBottom: "30px",
                      }}
                    >
                      <a href="http://localhost:3000/articles/1">
                        <div
                          style={{
                            marginLeft: "5px",
                          }}
                        >
                          <div
                            style={{
                              width: "200px",
                              height: "200px",
                              borderRadius: "15px",
                              outline: "gray 1px solid",
                            }}
                          >
                            <img
                              className="object-fill"
                              src="https://dnvefa72aowie.cloudfront.net/origin/article/202210/83cbd5362a585918a9b4a7354984ecbfb20208da27522d9b39579099b2cfe1f9.webp?q=95&s=1440x1440&t=inside"
                              alt=""
                              style={{
                                width: "100%",
                                height: "100%",
                                display: "block",
                                borderRadius: "15px",
                              }}
                            />
                          </div>
                          <div
                            style={{
                              width: "200px",
                              whiteSpace: "nowrap",
                              textOverflow: "ellipsis",
                              overflowX: "hidden",
                            }}
                          >
                            <span>
                              롯데 자이언츠 이대호 은퇴경기 티켓 팔아요
                            </span>
                          </div>
                          <div
                            style={{
                              fontWeight: "bolder",
                              padding: "5px 0",
                            }}
                          >
                            <span>33,000원</span>
                          </div>
                          <div
                            style={{
                              fontSize: "0.8rem",
                            }}
                          >
                            <span>부산 진구 부전동</span>
                          </div>
                          <div
                            style={{
                              fontSize: "0.8rem",
                              color: "gray",
                            }}
                          >
                            <span>관심 5</span>
                            <span> º </span>
                            <span>채팅 42</span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="http://localhost:3000/articles/2">
                        <div
                          style={{
                            marginLeft: "5px",
                          }}
                        >
                          <div
                            style={{
                              width: "200px",
                              height: "200px",
                              borderRadius: "15px",
                              outline: "gray 1px solid",
                            }}
                          >
                            <img
                              src="https://dnvefa72aowie.cloudfront.net/origin/article/202210/FB78ABBCE586F6D1F5C3328D31B5C40E489C2FAB9948A1F2F23114C5633EEF36.jpg?q=82&s=300x300&t=crop"
                              alt=""
                              style={{
                                borderRadius: "15px",
                              }}
                            />
                          </div>
                          <div
                            style={{
                              width: "200px",
                              whiteSpace: "nowrap",
                              textOverflow: "ellipsis",
                              overflowX: "hidden",
                            }}
                          >
                            <span>
                              롯데 자이언츠 이대호 은퇴경기 티켓 팔아요
                            </span>
                          </div>
                          <div>
                            <span>33,000원</span>
                          </div>
                          <div>
                            <span>부산 진구 부전동</span>
                          </div>
                          <div>
                            <span>관심 5</span>
                            <span> º </span>
                            <span>채팅 42</span>
                          </div>
                        </div>
                      </a>
                    </li>{" "}
                    <li>
                      <a href="http://localhost:3000/articles/3">
                        <div
                          style={{
                            marginLeft: "5px",
                          }}
                        >
                          <div
                            style={{
                              width: "200px",
                              height: "200px",
                              borderRadius: "15px",
                              outline: "gray 1px solid",
                            }}
                          >
                            <img
                              src="https://dnvefa72aowie.cloudfront.net/origin/article/202210/FB78ABBCE586F6D1F5C3328D31B5C40E489C2FAB9948A1F2F23114C5633EEF36.jpg?q=82&s=300x300&t=crop"
                              alt=""
                              style={{
                                borderRadius: "15px",
                              }}
                            />
                          </div>
                          <div
                            style={{
                              width: "200px",
                              whiteSpace: "nowrap",
                              textOverflow: "ellipsis",
                              overflowX: "hidden",
                            }}
                          >
                            <span>
                              롯데 자이언츠 이대호 은퇴경기 티켓 팔아요
                            </span>
                          </div>
                          <div>
                            <span>33,000원</span>
                          </div>
                          <div>
                            <span>부산 진구 부전동</span>
                          </div>
                          <div>
                            <span>관심 5</span>
                            <span> º </span>
                            <span>채팅 42</span>
                          </div>
                        </div>
                      </a>
                    </li>{" "}
                    <li>
                      <a href="#">
                        <div
                          style={{
                            marginLeft: "5px",
                          }}
                        >
                          <div
                            style={{
                              width: "200px",
                              height: "200px",
                              borderRadius: "15px",
                              outline: "gray 1px solid",
                            }}
                          >
                            <img
                              src="https://dnvefa72aowie.cloudfront.net/origin/article/202210/FB78ABBCE586F6D1F5C3328D31B5C40E489C2FAB9948A1F2F23114C5633EEF36.jpg?q=82&s=300x300&t=crop"
                              alt=""
                              style={{
                                borderRadius: "15px",
                              }}
                            />
                          </div>
                          <div
                            style={{
                              width: "200px",
                              whiteSpace: "nowrap",
                              textOverflow: "ellipsis",
                              overflowX: "hidden",
                            }}
                          >
                            <span>
                              롯데 자이언츠 이대호 은퇴경기 티켓 팔아요
                            </span>
                          </div>
                          <div>
                            <span>33,000원</span>
                          </div>
                          <div>
                            <span>부산 진구 부전동</span>
                          </div>
                          <div>
                            <span>관심 5</span>
                            <span> º </span>
                            <span>채팅 42</span>
                          </div>
                        </div>
                      </a>
                    </li>{" "}
                    <li>
                      <a href="#">
                        <div
                          style={{
                            marginLeft: "5px",
                          }}
                        >
                          <div
                            style={{
                              width: "200px",
                              height: "200px",
                              borderRadius: "15px",
                              outline: "gray 1px solid",
                            }}
                          >
                            <img
                              src="https://dnvefa72aowie.cloudfront.net/origin/article/202210/FB78ABBCE586F6D1F5C3328D31B5C40E489C2FAB9948A1F2F23114C5633EEF36.jpg?q=82&s=300x300&t=crop"
                              alt=""
                              style={{
                                borderRadius: "15px",
                              }}
                            />
                          </div>
                          <div
                            style={{
                              width: "200px",
                              whiteSpace: "nowrap",
                              textOverflow: "ellipsis",
                              overflowX: "hidden",
                            }}
                          >
                            <span>
                              롯데 자이언츠 이대호 은퇴경기 티켓 팔아요
                            </span>
                          </div>
                          <div>
                            <span>33,000원</span>
                          </div>
                          <div>
                            <span>부산 진구 부전동</span>
                          </div>
                          <div>
                            <span>관심 5</span>
                            <span> º </span>
                            <span>채팅 42</span>
                          </div>
                        </div>
                      </a>
                    </li>{" "}
                    <li>
                      <a href="#">
                        <div
                          style={{
                            marginLeft: "5px",
                          }}
                        >
                          <div
                            style={{
                              width: "200px",
                              height: "200px",
                              borderRadius: "15px",
                              outline: "gray 1px solid",
                            }}
                          >
                            <img
                              src="https://dnvefa72aowie.cloudfront.net/origin/article/202210/FB78ABBCE586F6D1F5C3328D31B5C40E489C2FAB9948A1F2F23114C5633EEF36.jpg?q=82&s=300x300&t=crop"
                              alt=""
                              style={{
                                borderRadius: "15px",
                              }}
                            />
                          </div>
                          <div
                            style={{
                              width: "200px",
                              whiteSpace: "nowrap",
                              textOverflow: "ellipsis",
                              overflowX: "hidden",
                            }}
                          >
                            <span>
                              롯데 자이언츠 이대호 은퇴경기 티켓 팔아요
                            </span>
                          </div>
                          <div>
                            <span>33,000원</span>
                          </div>
                          <div>
                            <span>부산 진구 부전동</span>
                          </div>
                          <div>
                            <span>관심 5</span>
                            <span> º </span>
                            <span>채팅 42</span>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <br />
            </div>
          </section>
        </div>

        <Footer />
      </div>
    );
  } else {
    return (
      <div>
        <Header />

        <div
          style={{
            width: "700px",
            margin: "0 auto",
          }}
        >
          <div className="mt-5 relative">
            <button
              className="font-bold absolute"
              style={{
                fontSize: "1.3rem",
                top: "50%",
                left: "-5%",
              }}
            >
              <BsChevronLeft />
            </button>
            <button
              className="font-bold absolute "
              style={{
                fontSize: "1.3rem",

                top: "50%",
                right: "-5%",
              }}
            >
              <BsChevronRight />
            </button>
            <a href="#">
              <img
                className="rounded-lg"
                src="https://dnvefa72aowie.cloudfront.net/origin/article/202210/83cbd5362a585918a9b4a7354984ecbfb20208da27522d9b39579099b2cfe1f9.webp?q=95&s=1440x1440&t=inside"
                alt=""
              />
            </a>
          </div>
          <section className="mt-6 flex justify-end gap-3">
            <div
              className="avatar flex justify-center items-center"
              style={{
                width: "3.5rem",
              }}
            >
              <div className="w-12 rounded-full">
                <img src="https://placeimg.com/192/192/people" />
              </div>
            </div>
            <div
              className="flex justify-center flex-col"
              style={{
                width: "500px",
              }}
            >
              <div className="font-bold ">nickname</div>
              <div className="text-sm">대전광역시 서구 둔산동</div>
            </div>

            <div
              style={{
                width: "200px",
              }}
            >
              <div className="flex gap-2">
                <div>
                  <div
                    className="font-bold flex justify-end p-1 "
                    style={{
                      color: "green",
                    }}
                  >
                    38.8
                  </div>
                  <progress
                    className="flex progress progress-success w-32"
                    value="40"
                    max="100"
                  ></progress>
                </div>
                <div
                  className="flex"
                  style={{
                    color: "green",
                    fontSize: "1.75rem",
                  }}
                >
                  <BsFillEmojiSmileFill />
                </div>
              </div>
              <div
                className="text-sm flex justify-end"
                style={{
                  color: "gray",
                }}
              >
                매너온도
              </div>
            </div>
          </section>
          <br />
          <div
            style={{
              width: "700px",
              borderBottom: "1px #e4e4e4 solid",
            }}
          ></div>
          <section>
            <div className="mt-6">
              <div
                className="font-bold"
                style={{
                  fontSize: "1.25rem",
                }}
              >
                {article.productSubject}
              </div>
              <div className="flex gap-2">
                <div
                  className="text-sm"
                  style={{
                    color: "gray",
                  }}
                >
                  {article.productCategory}
                </div>
                <div
                  className="text-sm"
                  style={{
                    color: "gray",
                  }}
                >
                  2일 전
                </div>
              </div>
              <div
                className="font-bold"
                style={{
                  fontSize: "1.25rem",
                }}
              >
                {article.productPrice}원
              </div>
            </div>
            <br />
            <div>
              <div>{article.productContent}</div>
              <div
                className="flex text-sm gap-2 my-5"
                style={{
                  color: "gray",
                }}
              >
                <span>관심</span>
                <div>{article.productLike}</div>
                <span>채팅</span>
                <div>{article.productChatting}</div>
                <span>조회</span>
                <div>{article.productView}</div>
              </div>
            </div>
          </section>
          <br />
          <div
            style={{
              width: "700px",
              borderBottom: "1px #e4e4e4 solid",
            }}
          ></div>
          <section>
            <div>
              <div className="py-9 flex justify-between">
                <div
                  className="font-bold"
                  style={{
                    fontSize: "1.1rem",
                  }}
                >
                  당근마켓 인기중고
                </div>
                <div
                  className=""
                  style={{
                    color: "#FF7F3F",
                  }}
                >
                  <a href="#">더 구경하기</a>
                </div>
              </div>
              <div>
                <div>
                  <ul
                    className="grid grid-cols-3"
                    style={{
                      maxWidth: "1000px",
                      margin: "0 auto",
                    }}
                  >
                    <li
                      style={{
                        paddingBottom: "30px",
                      }}
                    >
                      <a href="http://localhost:3000/articles/1">
                        <div
                          style={{
                            marginLeft: "5px",
                          }}
                        >
                          <div
                            style={{
                              width: "200px",
                              height: "200px",
                              borderRadius: "15px",
                              outline: "gray 1px solid",
                            }}
                          >
                            <img
                              className="object-fill"
                              src="https://dnvefa72aowie.cloudfront.net/origin/article/202210/83cbd5362a585918a9b4a7354984ecbfb20208da27522d9b39579099b2cfe1f9.webp?q=95&s=1440x1440&t=inside"
                              alt=""
                              style={{
                                width: "100%",
                                height: "100%",
                                display: "block",
                                borderRadius: "15px",
                              }}
                            />
                          </div>
                          <div
                            style={{
                              width: "200px",
                              whiteSpace: "nowrap",
                              textOverflow: "ellipsis",
                              overflowX: "hidden",
                            }}
                          >
                            <span>
                              롯데 자이언츠 이대호 은퇴경기 티켓 팔아요
                            </span>
                          </div>
                          <div
                            style={{
                              fontWeight: "bolder",
                              padding: "5px 0",
                            }}
                          >
                            <span>33,000원</span>
                          </div>
                          <div
                            style={{
                              fontSize: "0.8rem",
                            }}
                          >
                            <span>부산 진구 부전동</span>
                          </div>
                          <div
                            style={{
                              fontSize: "0.8rem",
                              color: "gray",
                            }}
                          >
                            <span>관심 5</span>
                            <span> º </span>
                            <span>채팅 42</span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="http://localhost:3000/articles/2">
                        <div
                          style={{
                            marginLeft: "5px",
                          }}
                        >
                          <div
                            style={{
                              width: "200px",
                              height: "200px",
                              borderRadius: "15px",
                              outline: "gray 1px solid",
                            }}
                          >
                            <img
                              src="https://dnvefa72aowie.cloudfront.net/origin/article/202210/FB78ABBCE586F6D1F5C3328D31B5C40E489C2FAB9948A1F2F23114C5633EEF36.jpg?q=82&s=300x300&t=crop"
                              alt=""
                              style={{
                                borderRadius: "15px",
                              }}
                            />
                          </div>
                          <div
                            style={{
                              width: "200px",
                              whiteSpace: "nowrap",
                              textOverflow: "ellipsis",
                              overflowX: "hidden",
                            }}
                          >
                            <span>
                              롯데 자이언츠 이대호 은퇴경기 티켓 팔아요
                            </span>
                          </div>
                          <div>
                            <span>33,000원</span>
                          </div>
                          <div>
                            <span>부산 진구 부전동</span>
                          </div>
                          <div>
                            <span>관심 5</span>
                            <span> º </span>
                            <span>채팅 42</span>
                          </div>
                        </div>
                      </a>
                    </li>{" "}
                    <li>
                      <a href="http://localhost:3000/articles/3">
                        <div
                          style={{
                            marginLeft: "5px",
                          }}
                        >
                          <div
                            style={{
                              width: "200px",
                              height: "200px",
                              borderRadius: "15px",
                              outline: "gray 1px solid",
                            }}
                          >
                            <img
                              src="https://dnvefa72aowie.cloudfront.net/origin/article/202210/FB78ABBCE586F6D1F5C3328D31B5C40E489C2FAB9948A1F2F23114C5633EEF36.jpg?q=82&s=300x300&t=crop"
                              alt=""
                              style={{
                                borderRadius: "15px",
                              }}
                            />
                          </div>
                          <div
                            style={{
                              width: "200px",
                              whiteSpace: "nowrap",
                              textOverflow: "ellipsis",
                              overflowX: "hidden",
                            }}
                          >
                            <span>
                              롯데 자이언츠 이대호 은퇴경기 티켓 팔아요
                            </span>
                          </div>
                          <div>
                            <span>33,000원</span>
                          </div>
                          <div>
                            <span>부산 진구 부전동</span>
                          </div>
                          <div>
                            <span>관심 5</span>
                            <span> º </span>
                            <span>채팅 42</span>
                          </div>
                        </div>
                      </a>
                    </li>{" "}
                    <li>
                      <a href="#">
                        <div
                          style={{
                            marginLeft: "5px",
                          }}
                        >
                          <div
                            style={{
                              width: "200px",
                              height: "200px",
                              borderRadius: "15px",
                              outline: "gray 1px solid",
                            }}
                          >
                            <img
                              src="https://dnvefa72aowie.cloudfront.net/origin/article/202210/FB78ABBCE586F6D1F5C3328D31B5C40E489C2FAB9948A1F2F23114C5633EEF36.jpg?q=82&s=300x300&t=crop"
                              alt=""
                              style={{
                                borderRadius: "15px",
                              }}
                            />
                          </div>
                          <div
                            style={{
                              width: "200px",
                              whiteSpace: "nowrap",
                              textOverflow: "ellipsis",
                              overflowX: "hidden",
                            }}
                          >
                            <span>
                              롯데 자이언츠 이대호 은퇴경기 티켓 팔아요
                            </span>
                          </div>
                          <div>
                            <span>33,000원</span>
                          </div>
                          <div>
                            <span>부산 진구 부전동</span>
                          </div>
                          <div>
                            <span>관심 5</span>
                            <span> º </span>
                            <span>채팅 42</span>
                          </div>
                        </div>
                      </a>
                    </li>{" "}
                    <li>
                      <a href="#">
                        <div
                          style={{
                            marginLeft: "5px",
                          }}
                        >
                          <div
                            style={{
                              width: "200px",
                              height: "200px",
                              borderRadius: "15px",
                              outline: "gray 1px solid",
                            }}
                          >
                            <img
                              src="https://dnvefa72aowie.cloudfront.net/origin/article/202210/FB78ABBCE586F6D1F5C3328D31B5C40E489C2FAB9948A1F2F23114C5633EEF36.jpg?q=82&s=300x300&t=crop"
                              alt=""
                              style={{
                                borderRadius: "15px",
                              }}
                            />
                          </div>
                          <div
                            style={{
                              width: "200px",
                              whiteSpace: "nowrap",
                              textOverflow: "ellipsis",
                              overflowX: "hidden",
                            }}
                          >
                            <span>
                              롯데 자이언츠 이대호 은퇴경기 티켓 팔아요
                            </span>
                          </div>
                          <div>
                            <span>33,000원</span>
                          </div>
                          <div>
                            <span>부산 진구 부전동</span>
                          </div>
                          <div>
                            <span>관심 5</span>
                            <span> º </span>
                            <span>채팅 42</span>
                          </div>
                        </div>
                      </a>
                    </li>{" "}
                    <li>
                      <a href="#">
                        <div
                          style={{
                            marginLeft: "5px",
                          }}
                        >
                          <div
                            style={{
                              width: "200px",
                              height: "200px",
                              borderRadius: "15px",
                              outline: "gray 1px solid",
                            }}
                          >
                            <img
                              src="https://dnvefa72aowie.cloudfront.net/origin/article/202210/FB78ABBCE586F6D1F5C3328D31B5C40E489C2FAB9948A1F2F23114C5633EEF36.jpg?q=82&s=300x300&t=crop"
                              alt=""
                              style={{
                                borderRadius: "15px",
                              }}
                            />
                          </div>
                          <div
                            style={{
                              width: "200px",
                              whiteSpace: "nowrap",
                              textOverflow: "ellipsis",
                              overflowX: "hidden",
                            }}
                          >
                            <span>
                              롯데 자이언츠 이대호 은퇴경기 티켓 팔아요
                            </span>
                          </div>
                          <div>
                            <span>33,000원</span>
                          </div>
                          <div>
                            <span>부산 진구 부전동</span>
                          </div>
                          <div>
                            <span>관심 5</span>
                            <span> º </span>
                            <span>채팅 42</span>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <br />
            </div>
          </section>
        </div>

        <Footer />
      </div>
    );
  }
};

export default ProductPost;
