import React from "react";
import RealtyHeader from "../layouts/RealtyHeader";
import LoginedRealtyHeader from "../layouts/LoginedRealtyHeader";
import Footer from "../layouts/Footer";
import "../styles/Realty.css";
import { AiOutlineRight } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { FaCarrot } from "react-icons/fa";
const Realty = ({ logined, setLogined }) => {
  const navigate = useNavigate();
  const [Realty, setRealty] = useState([]);
  const [address, setAddress] = useState("");

  const onAddress = () => {
    let index = address.includes("대전광역시");
    console.log(index);
  };

  const moveRealty = async (id) => {
    try {
      await axios({
        url: `http://localhost:8083/realtyCheck/${id}`,
        method: "POST",
      });
    } catch (e) {
      console.log(e);
    }
    navigate(`/realtypost/${id}`);
  };

  const onRealty = (data) => {
    setRealty((prev) => data);
  };

  useEffect(() => {
    const onSubmit = async () => {
      try {
        const data = await axios({
          url: `http://localhost:8083/realty`,
          method: "GET",
        });
        onRealty(data.data);
        setAddress(data.data.realtyAddress);
        onAddress();
      } catch (e) {
        console.log(e);
      }
    };
    onSubmit();
  }, []);

  if (logined) {
    return (
      <div>
        <LoginedRealtyHeader setLogined={setLogined} />
        <section>
          <div
            style={{
              width: "800px",
              margin: "0 auto",
            }}
          >
            <div className="flex gap-3">
              <div
                className="font-bold"
                style={{
                  fontSize: "1.5rem",
                  paddingTop: "5%",
                }}
              >
                인기 부동산 직거래 게시글
              </div>
              <span
                href={`/realtyWrite`}
                className="flex items-end justify-end "
                style={{
                  width: "62%",
                }}
              >
                <a
                  href={`/realtyWrite`}
                  className="rounded-md p-2"
                  style={{
                    backgroundColor: "#fc9d39",
                    color: "white",
                  }}
                >
                  {" "}
                  내 매물 내놓기
                </a>
              </span>
            </div>
            <div>
              <div className="mt-5">
                <ul className="grid grid-cols-2">
                  {Realty.map((realty, index) => (
                    <li key={index}>
                      <button
                        onClick={() => {
                          moveRealty(realty.realtyId);
                        }}
                      >
                        <div
                          className="flex"
                          style={{
                            height: "120px",
                          }}
                        >
                          <div className="flex-col flex justify-center">
                            {realty.profileImage != null ? (
                              <img
                                src={realty.profileImage}
                                alt=""
                                style={{
                                  borderRadius: "15px",
                                  width: "100%",
                                  height: "100%",
                                  objectFit: "fill",
                                  display: "block",
                                }}
                              />
                            ) : (
                              <FaCarrot
                                style={{
                                  color: "#fc9d39",
                                  fontSize: "10rem",
                                  transform: "translate(12.5%,12.5%)",
                                  border: "0.1px #fc9d39 solid",
                                  borderRadius: "50%",
                                }}
                              />
                            )}
                          </div>
                          <div
                            className=""
                            style={{
                              height: "120px",
                            }}
                          >
                            <span>{realty.realtyCategory} </span>
                            <span>
                              {realty.realtyDeposit}만원/{realty.realtyMonthly}
                              만원 -
                              <span
                                style={{
                                  border: "1px red solid",
                                  width: "125px",
                                  overflow: "hidden",
                                  whiteSpace: "nowrap",
                                  display: "inline-block",
                                }}
                              >
                                {realty.realtyAddress.includes(
                                  "대전광역시" || "대전시"
                                )
                                  ? realty.realtyAddress
                                  : "대전광역시" + realty.realtyAddress}
                              </span>
                            </span>
                            <div value={address} onChange={onAddress}></div>
                            <div
                              className="text-sm"
                              style={{
                                color: "#73777B",
                                paddingTop: "5px",
                              }}
                            >
                              <span>밥을짓는홍여사 . 부평동</span>
                            </div>
                            <div className="font-bold pt-1">
                              <span>시급 10,100</span>
                            </div>
                          </div>
                        </div>
                      </button>
                    </li>
                  ))}

                  <li
                    className="flex  items-center gap-4"
                    style={{
                      height: "120px",
                    }}
                  >
                    <a href="#" className="flex-col flex justify-center">
                      <div className="img1">
                        <img
                          src="https://dnvefa72aowie.cloudfront.net/jobs/article/14115542/1665623315426/job-post-2115755419.jpeg?q=95&s=1440x1440&t=inside"
                          alt=""
                        />
                      </div>
                    </a>
                    <a href="">
                      <div
                        style={{
                          height: "120px",
                          marginTop: "25px",
                        }}
                      >
                        <div style={{}}>
                          <span>
                            주방이모 파트타임 오전 6시~오전 10시(4시간)
                          </span>
                        </div>
                        <div
                          className="text-sm"
                          style={{
                            color: "#73777B",
                            paddingTop: "5px",
                          }}
                        >
                          <span>밥을짓는홍여사 . 부평동</span>
                        </div>
                        <div className="font-bold pt-1">
                          <span>시급 10,100</span>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-5">
                <div>
                  <ul className="grid grid-cols-2">
                    <li
                      className="flex  items-center gap-4"
                      style={{
                        height: "120px",
                      }}
                    >
                      <a href="#" className="flex-col flex justify-center">
                        <div className="img1">
                          <img
                            src="https://dnvefa72aowie.cloudfront.net/jobs/article/14115542/1665623315426/job-post-2115755419.jpeg?q=95&s=1440x1440&t=inside"
                            alt=""
                          />
                        </div>
                      </a>
                      <a href="">
                        <div
                          style={{
                            height: "120px",
                          }}
                        >
                          <div style={{}}>
                            <span>
                              주방이모 파트타임 오전 6시~오전 10시(4시간)
                            </span>
                          </div>
                          <div
                            className="text-sm"
                            style={{
                              color: "#73777B",
                              paddingTop: "5px",
                            }}
                          >
                            <span>밥을짓는홍여사 . 부평동</span>
                          </div>
                          <div className="font-bold pt-1">
                            <span>시급 10,100</span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li
                      className="flex  items-center gap-4"
                      style={{
                        height: "120px",
                      }}
                    >
                      <a href="#" className="flex-col flex justify-center">
                        <div className="img1">
                          <img
                            src="https://dnvefa72aowie.cloudfront.net/jobs/article/14115542/1665623315426/job-post-2115755419.jpeg?q=95&s=1440x1440&t=inside"
                            alt=""
                          />
                        </div>
                      </a>
                      <a href="">
                        <div
                          style={{
                            height: "120px",
                            marginTop: "25px",
                          }}
                        >
                          <div style={{}}>
                            <span>
                              주방이모 파트타임 오전 6시~오전 10시(4시간)
                            </span>
                          </div>
                          <div
                            className="text-sm"
                            style={{
                              color: "#73777B",
                              paddingTop: "5px",
                            }}
                          >
                            <span>밥을짓는홍여사 . 부평동</span>
                          </div>
                          <div className="font-bold pt-1">
                            <span>시급 10,100</span>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-5">
                <div>
                  <ul className="grid grid-cols-2">
                    <li
                      className="flex  items-center gap-4"
                      style={{
                        height: "120px",
                      }}
                    >
                      <a href="#" className="flex-col flex justify-center">
                        <div className="img1">
                          <img
                            src="https://dnvefa72aowie.cloudfront.net/jobs/article/14115542/1665623315426/job-post-2115755419.jpeg?q=95&s=1440x1440&t=inside"
                            alt=""
                          />
                        </div>
                      </a>
                      <a href="">
                        <div
                          style={{
                            height: "120px",
                          }}
                        >
                          <div style={{}}>
                            <span>
                              주방이모 파트타임 오전 6시~오전 10시(4시간)
                            </span>
                          </div>
                          <div
                            className="text-sm"
                            style={{
                              color: "#73777B",
                              paddingTop: "5px",
                            }}
                          >
                            <span>밥을짓는홍여사 . 부평동</span>
                          </div>
                          <div className="font-bold pt-1">
                            <span>시급 10,100</span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li
                      className="flex  items-center gap-4"
                      style={{
                        height: "120px",
                      }}
                    >
                      <a href="#" className="flex-col flex justify-center">
                        <div className="img1">
                          <img
                            src="https://dnvefa72aowie.cloudfront.net/jobs/article/14115542/1665623315426/job-post-2115755419.jpeg?q=95&s=1440x1440&t=inside"
                            alt=""
                          />
                        </div>
                      </a>
                      <a href="">
                        <div
                          style={{
                            height: "120px",
                            marginTop: "25px",
                          }}
                        >
                          <div style={{}}>
                            <span>
                              주방이모 파트타임 오전 6시~오전 10시(4시간)
                            </span>
                          </div>
                          <div
                            className="text-sm"
                            style={{
                              color: "#73777B",
                              paddingTop: "5px",
                            }}
                          >
                            <span>밥을짓는홍여사 . 부평동</span>
                          </div>
                          <div className="font-bold pt-1">
                            <span>시급 10,100</span>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="rounded-xl font-bold p-8 mb-16"
                style={{
                  marginTop: "8%",
                  fontSize: "1.25rem",
                  backgroundColor: "#EEEEEE",
                }}
              >
                <div>
                  <span>복비 없이 투명한 투명한 부동산 직거래</span>
                </div>
                <div>
                  <span>당근마켓 내 근처 탭에서 바로 찾아보세요!</span>
                </div>
                <div
                  className="text-sm"
                  style={{
                    color: "#084594",
                  }}
                >
                  <div className="flex items-center font-bold">
                    <a href="#">앱 다운로드 하기</a>
                    <AiOutlineRight />
                  </div>
                </div>
              </div>
              <div className="mt-7">
                <div>
                  <ul className="grid grid-cols-2">
                    <li
                      className="flex  items-center gap-4"
                      style={{
                        height: "120px",
                      }}
                    >
                      <a href="#" className="flex-col flex justify-center">
                        <div className="img1">
                          <img
                            src="https://dnvefa72aowie.cloudfront.net/jobs/article/14115542/1665623315426/job-post-2115755419.jpeg?q=95&s=1440x1440&t=inside"
                            alt=""
                          />
                        </div>
                      </a>
                      <a href="">
                        <div
                          style={{
                            height: "120px",
                          }}
                        >
                          <div style={{}}>
                            <span>
                              주방이모 파트타임 오전 6시~오전 10시(4시간)
                            </span>
                          </div>
                          <div
                            className="text-sm"
                            style={{
                              color: "#73777B",
                              paddingTop: "5px",
                            }}
                          >
                            <span>밥을짓는홍여사 . 부평동</span>
                          </div>
                          <div className="font-bold pt-1">
                            <span>시급 10,100</span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li
                      className="flex  items-center gap-4"
                      style={{
                        height: "120px",
                      }}
                    >
                      <a href="#" className="flex-col flex justify-center">
                        <div className="img1">
                          <img
                            src="https://dnvefa72aowie.cloudfront.net/jobs/article/14115542/1665623315426/job-post-2115755419.jpeg?q=95&s=1440x1440&t=inside"
                            alt=""
                          />
                        </div>
                      </a>
                      <a href="">
                        <div
                          style={{
                            height: "120px",
                            marginTop: "25px",
                          }}
                        >
                          <div style={{}}>
                            <span>
                              주방이모 파트타임 오전 6시~오전 10시(4시간)
                            </span>
                          </div>
                          <div
                            className="text-sm"
                            style={{
                              color: "#73777B",
                              paddingTop: "5px",
                            }}
                          >
                            <span>밥을짓는홍여사 . 부평동</span>
                          </div>
                          <div className="font-bold pt-1">
                            <span>시급 10,100</span>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-5">
                <div>
                  <ul className="grid grid-cols-2">
                    <li
                      className="flex  items-center gap-4"
                      style={{
                        height: "120px",
                      }}
                    >
                      <a href="#" className="flex-col flex justify-center">
                        <div className="img1">
                          <img
                            src="https://dnvefa72aowie.cloudfront.net/jobs/article/14115542/1665623315426/job-post-2115755419.jpeg?q=95&s=1440x1440&t=inside"
                            alt=""
                          />
                        </div>
                      </a>
                      <a href="">
                        <div
                          style={{
                            height: "120px",
                          }}
                        >
                          <div style={{}}>
                            <span>
                              주방이모 파트타임 오전 6시~오전 10시(4시간)
                            </span>
                          </div>
                          <div
                            className="text-sm"
                            style={{
                              color: "#73777B",
                              paddingTop: "5px",
                            }}
                          >
                            <span>밥을짓는홍여사 . 부평동</span>
                          </div>
                          <div className="font-bold pt-1">
                            <span>시급 10,100</span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li
                      className="flex  items-center gap-4"
                      style={{
                        height: "120px",
                      }}
                    >
                      <a href="#" className="flex-col flex justify-center">
                        <div className="img1">
                          <img
                            src="https://dnvefa72aowie.cloudfront.net/jobs/article/14115542/1665623315426/job-post-2115755419.jpeg?q=95&s=1440x1440&t=inside"
                            alt=""
                          />
                        </div>
                      </a>
                      <a href="">
                        <div
                          style={{
                            height: "120px",
                            marginTop: "25px",
                          }}
                        >
                          <div style={{}}>
                            <span>
                              주방이모 파트타임 오전 6시~오전 10시(4시간)
                            </span>
                          </div>
                          <div
                            className="text-sm"
                            style={{
                              color: "#73777B",
                              paddingTop: "5px",
                            }}
                          >
                            <span>밥을짓는홍여사 . 부평동</span>
                          </div>
                          <div className="font-bold pt-1">
                            <span>시급 10,100</span>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-5">
                <div>
                  <ul className="grid grid-cols-2">
                    <li
                      className="flex  items-center gap-4"
                      style={{
                        height: "120px",
                      }}
                    >
                      <a href="#" className="flex-col flex justify-center">
                        <div className="img1">
                          <img
                            src="https://dnvefa72aowie.cloudfront.net/jobs/article/14115542/1665623315426/job-post-2115755419.jpeg?q=95&s=1440x1440&t=inside"
                            alt=""
                          />
                        </div>
                      </a>
                      <a href="">
                        <div
                          style={{
                            height: "120px",
                          }}
                        >
                          <div style={{}}>
                            <span>
                              주방이모 파트타임 오전 6시~오전 10시(4시간)
                            </span>
                          </div>
                          <div
                            className="text-sm"
                            style={{
                              color: "#73777B",
                              paddingTop: "5px",
                            }}
                          >
                            <span>밥을짓는홍여사 . 부평동</span>
                          </div>
                          <div className="font-bold pt-1">
                            <span>시급 10,100</span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li
                      className="flex  items-center gap-4"
                      style={{
                        height: "120px",
                      }}
                    >
                      <a href="#" className="flex-col flex justify-center">
                        <div className="img1">
                          <img
                            src="https://dnvefa72aowie.cloudfront.net/jobs/article/14115542/1665623315426/job-post-2115755419.jpeg?q=95&s=1440x1440&t=inside"
                            alt=""
                          />
                        </div>
                      </a>
                      <a href="">
                        <div
                          style={{
                            height: "120px",
                            marginTop: "25px",
                          }}
                        >
                          <div style={{}}>
                            <span>
                              주방이모 파트타임 오전 6시~오전 10시(4시간)
                            </span>
                          </div>
                          <div
                            className="text-sm"
                            style={{
                              color: "#73777B",
                              paddingTop: "5px",
                            }}
                          >
                            <span>밥을짓는홍여사 . 부평동</span>
                          </div>
                          <div className="font-bold pt-1">
                            <span>시급 10,100</span>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>{" "}
              <div className="mt-5">
                <div>
                  <ul className="grid grid-cols-2">
                    <li
                      className="flex  items-center gap-4"
                      style={{
                        height: "120px",
                      }}
                    >
                      <a href="#" className="flex-col flex justify-center">
                        <div className="img1">
                          <img
                            src="https://dnvefa72aowie.cloudfront.net/jobs/article/14115542/1665623315426/job-post-2115755419.jpeg?q=95&s=1440x1440&t=inside"
                            alt=""
                          />
                        </div>
                      </a>
                      <a href="">
                        <div
                          style={{
                            height: "120px",
                          }}
                        >
                          <div style={{}}>
                            <span>
                              주방이모 파트타임 오전 6시~오전 10시(4시간)
                            </span>
                          </div>
                          <div
                            className="text-sm"
                            style={{
                              color: "#73777B",
                              paddingTop: "5px",
                            }}
                          >
                            <span>밥을짓는홍여사 . 부평동</span>
                          </div>
                          <div className="font-bold pt-1">
                            <span>시급 10,100</span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li
                      className="flex  items-center gap-4"
                      style={{
                        height: "120px",
                      }}
                    >
                      <a href="#" className="flex-col flex justify-center">
                        <div className="img1">
                          <img
                            src="https://dnvefa72aowie.cloudfront.net/jobs/article/14115542/1665623315426/job-post-2115755419.jpeg?q=95&s=1440x1440&t=inside"
                            alt=""
                          />
                        </div>
                      </a>
                      <a href="">
                        <div
                          style={{
                            height: "120px",
                            marginTop: "25px",
                          }}
                        >
                          <div style={{}}>
                            <span>
                              주방이모 파트타임 오전 6시~오전 10시(4시간)
                            </span>
                          </div>
                          <div
                            className="text-sm"
                            style={{
                              color: "#73777B",
                              paddingTop: "5px",
                            }}
                          >
                            <span>밥을짓는홍여사 . 부평동</span>
                          </div>
                          <div className="font-bold pt-1">
                            <span>시급 10,100</span>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />
        <Footer />
      </div>
    );
  } else {
    return (
      <div>
        <RealtyHeader />
        <section>
          <div
            style={{
              width: "800px",
              margin: "0 auto",
            }}
          >
            <div className="flex gap-3">
              <div
                className="font-bold"
                style={{
                  fontSize: "1.5rem",
                  paddingTop: "5%",
                }}
              >
                인기 부동산 직거래 게시글
              </div>
              <span
                href={`/realtyWrite`}
                className="flex items-end justify-end "
                style={{
                  width: "62%",
                }}
              >
                <a
                  href={`/realtyWrite`}
                  className="rounded-md p-2"
                  style={{
                    backgroundColor: "#fc9d39",
                    color: "white",
                  }}
                >
                  {" "}
                  내 매물 내놓기
                </a>
              </span>
            </div>
            <div>
              <div className="mt-5">
                <div>
                  <ul className="grid grid-cols-2">
                    <li
                      className="flex  items-center gap-4"
                      style={{
                        height: "120px",
                      }}
                    >
                      <a href="#" className="flex-col flex justify-center">
                        <div className="img1">
                          <img
                            src="https://dnvefa72aowie.cloudfront.net/jobs/article/14115542/1665623315426/job-post-2115755419.jpeg?q=95&s=1440x1440&t=inside"
                            alt=""
                          />
                        </div>
                      </a>
                      <a href="">
                        <div
                          style={{
                            height: "120px",
                          }}
                        >
                          <div style={{}}>
                            <span>
                              주방이모 파트타임 오전 6시~오전 10시(4시간)
                            </span>
                          </div>
                          <div
                            className="text-sm"
                            style={{
                              color: "#73777B",
                              paddingTop: "5px",
                            }}
                          >
                            <span>밥을짓는홍여사 . 부평동</span>
                          </div>
                          <div className="font-bold pt-1">
                            <span>시급 10,100</span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li
                      className="flex  items-center gap-4"
                      style={{
                        height: "120px",
                      }}
                    >
                      <a href="#" className="flex-col flex justify-center">
                        <div className="img1">
                          <img
                            src="https://dnvefa72aowie.cloudfront.net/jobs/article/14115542/1665623315426/job-post-2115755419.jpeg?q=95&s=1440x1440&t=inside"
                            alt=""
                          />
                        </div>
                      </a>
                      <a href="">
                        <div
                          style={{
                            height: "120px",
                            marginTop: "25px",
                          }}
                        >
                          <div style={{}}>
                            <span>
                              주방이모 파트타임 오전 6시~오전 10시(4시간)
                            </span>
                          </div>
                          <div
                            className="text-sm"
                            style={{
                              color: "#73777B",
                              paddingTop: "5px",
                            }}
                          >
                            <span>밥을짓는홍여사 . 부평동</span>
                          </div>
                          <div className="font-bold pt-1">
                            <span>시급 10,100</span>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-5">
                <div>
                  <ul className="grid grid-cols-2">
                    <li
                      className="flex  items-center gap-4"
                      style={{
                        height: "120px",
                      }}
                    >
                      <a href="#" className="flex-col flex justify-center">
                        <div className="img1">
                          <img
                            src="https://dnvefa72aowie.cloudfront.net/jobs/article/14115542/1665623315426/job-post-2115755419.jpeg?q=95&s=1440x1440&t=inside"
                            alt=""
                          />
                        </div>
                      </a>
                      <a href="">
                        <div
                          style={{
                            height: "120px",
                          }}
                        >
                          <div style={{}}>
                            <span>
                              주방이모 파트타임 오전 6시~오전 10시(4시간)
                            </span>
                          </div>
                          <div
                            className="text-sm"
                            style={{
                              color: "#73777B",
                              paddingTop: "5px",
                            }}
                          >
                            <span>밥을짓는홍여사 . 부평동</span>
                          </div>
                          <div className="font-bold pt-1">
                            <span>시급 10,100</span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li
                      className="flex  items-center gap-4"
                      style={{
                        height: "120px",
                      }}
                    >
                      <a href="#" className="flex-col flex justify-center">
                        <div className="img1">
                          <img
                            src="https://dnvefa72aowie.cloudfront.net/jobs/article/14115542/1665623315426/job-post-2115755419.jpeg?q=95&s=1440x1440&t=inside"
                            alt=""
                          />
                        </div>
                      </a>
                      <a href="">
                        <div
                          style={{
                            height: "120px",
                            marginTop: "25px",
                          }}
                        >
                          <div style={{}}>
                            <span>
                              주방이모 파트타임 오전 6시~오전 10시(4시간)
                            </span>
                          </div>
                          <div
                            className="text-sm"
                            style={{
                              color: "#73777B",
                              paddingTop: "5px",
                            }}
                          >
                            <span>밥을짓는홍여사 . 부평동</span>
                          </div>
                          <div className="font-bold pt-1">
                            <span>시급 10,100</span>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-5">
                <div>
                  <ul className="grid grid-cols-2">
                    <li
                      className="flex  items-center gap-4"
                      style={{
                        height: "120px",
                      }}
                    >
                      <a href="#" className="flex-col flex justify-center">
                        <div className="img1">
                          <img
                            src="https://dnvefa72aowie.cloudfront.net/jobs/article/14115542/1665623315426/job-post-2115755419.jpeg?q=95&s=1440x1440&t=inside"
                            alt=""
                          />
                        </div>
                      </a>
                      <a href="">
                        <div
                          style={{
                            height: "120px",
                          }}
                        >
                          <div style={{}}>
                            <span>
                              주방이모 파트타임 오전 6시~오전 10시(4시간)
                            </span>
                          </div>
                          <div
                            className="text-sm"
                            style={{
                              color: "#73777B",
                              paddingTop: "5px",
                            }}
                          >
                            <span>밥을짓는홍여사 . 부평동</span>
                          </div>
                          <div className="font-bold pt-1">
                            <span>시급 10,100</span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li
                      className="flex  items-center gap-4"
                      style={{
                        height: "120px",
                      }}
                    >
                      <a href="#" className="flex-col flex justify-center">
                        <div className="img1">
                          <img
                            src="https://dnvefa72aowie.cloudfront.net/jobs/article/14115542/1665623315426/job-post-2115755419.jpeg?q=95&s=1440x1440&t=inside"
                            alt=""
                          />
                        </div>
                      </a>
                      <a href="">
                        <div
                          style={{
                            height: "120px",
                            marginTop: "25px",
                          }}
                        >
                          <div style={{}}>
                            <span>
                              주방이모 파트타임 오전 6시~오전 10시(4시간)
                            </span>
                          </div>
                          <div
                            className="text-sm"
                            style={{
                              color: "#73777B",
                              paddingTop: "5px",
                            }}
                          >
                            <span>밥을짓는홍여사 . 부평동</span>
                          </div>
                          <div className="font-bold pt-1">
                            <span>시급 10,100</span>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="rounded-xl font-bold p-8 mb-16"
                style={{
                  marginTop: "8%",
                  fontSize: "1.25rem",
                  backgroundColor: "#EEEEEE",
                }}
              >
                <div>
                  <span>복비 없이 투명한 투명한 부동산 직거래</span>
                </div>
                <div>
                  <span>당근마켓 내 근처 탭에서 바로 찾아보세요!</span>
                </div>
                <div
                  className="text-sm"
                  style={{
                    color: "#084594",
                  }}
                >
                  <div className="flex items-center font-bold">
                    <a href="#">앱 다운로드 하기</a>
                    <AiOutlineRight />
                  </div>
                </div>
              </div>
              <div className="mt-7">
                <div>
                  <ul className="grid grid-cols-2">
                    <li
                      className="flex  items-center gap-4"
                      style={{
                        height: "120px",
                      }}
                    >
                      <a href="#" className="flex-col flex justify-center">
                        <div className="img1">
                          <img
                            src="https://dnvefa72aowie.cloudfront.net/jobs/article/14115542/1665623315426/job-post-2115755419.jpeg?q=95&s=1440x1440&t=inside"
                            alt=""
                          />
                        </div>
                      </a>
                      <a href="">
                        <div
                          style={{
                            height: "120px",
                          }}
                        >
                          <div style={{}}>
                            <span>
                              주방이모 파트타임 오전 6시~오전 10시(4시간)
                            </span>
                          </div>
                          <div
                            className="text-sm"
                            style={{
                              color: "#73777B",
                              paddingTop: "5px",
                            }}
                          >
                            <span>밥을짓는홍여사 . 부평동</span>
                          </div>
                          <div className="font-bold pt-1">
                            <span>시급 10,100</span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li
                      className="flex  items-center gap-4"
                      style={{
                        height: "120px",
                      }}
                    >
                      <a href="#" className="flex-col flex justify-center">
                        <div className="img1">
                          <img
                            src="https://dnvefa72aowie.cloudfront.net/jobs/article/14115542/1665623315426/job-post-2115755419.jpeg?q=95&s=1440x1440&t=inside"
                            alt=""
                          />
                        </div>
                      </a>
                      <a href="">
                        <div
                          style={{
                            height: "120px",
                            marginTop: "25px",
                          }}
                        >
                          <div style={{}}>
                            <span>
                              주방이모 파트타임 오전 6시~오전 10시(4시간)
                            </span>
                          </div>
                          <div
                            className="text-sm"
                            style={{
                              color: "#73777B",
                              paddingTop: "5px",
                            }}
                          >
                            <span>밥을짓는홍여사 . 부평동</span>
                          </div>
                          <div className="font-bold pt-1">
                            <span>시급 10,100</span>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-5">
                <div>
                  <ul className="grid grid-cols-2">
                    <li
                      className="flex  items-center gap-4"
                      style={{
                        height: "120px",
                      }}
                    >
                      <a href="#" className="flex-col flex justify-center">
                        <div className="img1">
                          <img
                            src="https://dnvefa72aowie.cloudfront.net/jobs/article/14115542/1665623315426/job-post-2115755419.jpeg?q=95&s=1440x1440&t=inside"
                            alt=""
                          />
                        </div>
                      </a>
                      <a href="">
                        <div
                          style={{
                            height: "120px",
                          }}
                        >
                          <div style={{}}>
                            <span>
                              주방이모 파트타임 오전 6시~오전 10시(4시간)
                            </span>
                          </div>
                          <div
                            className="text-sm"
                            style={{
                              color: "#73777B",
                              paddingTop: "5px",
                            }}
                          >
                            <span>밥을짓는홍여사 . 부평동</span>
                          </div>
                          <div className="font-bold pt-1">
                            <span>시급 10,100</span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li
                      className="flex  items-center gap-4"
                      style={{
                        height: "120px",
                      }}
                    >
                      <a href="#" className="flex-col flex justify-center">
                        <div className="img1">
                          <img
                            src="https://dnvefa72aowie.cloudfront.net/jobs/article/14115542/1665623315426/job-post-2115755419.jpeg?q=95&s=1440x1440&t=inside"
                            alt=""
                          />
                        </div>
                      </a>
                      <a href="">
                        <div
                          style={{
                            height: "120px",
                            marginTop: "25px",
                          }}
                        >
                          <div style={{}}>
                            <span>
                              주방이모 파트타임 오전 6시~오전 10시(4시간)
                            </span>
                          </div>
                          <div
                            className="text-sm"
                            style={{
                              color: "#73777B",
                              paddingTop: "5px",
                            }}
                          >
                            <span>밥을짓는홍여사 . 부평동</span>
                          </div>
                          <div className="font-bold pt-1">
                            <span>시급 10,100</span>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-5">
                <div>
                  <ul className="grid grid-cols-2">
                    <li
                      className="flex  items-center gap-4"
                      style={{
                        height: "120px",
                      }}
                    >
                      <a href="#" className="flex-col flex justify-center">
                        <div className="img1">
                          <img
                            src="https://dnvefa72aowie.cloudfront.net/jobs/article/14115542/1665623315426/job-post-2115755419.jpeg?q=95&s=1440x1440&t=inside"
                            alt=""
                          />
                        </div>
                      </a>
                      <a href="">
                        <div
                          style={{
                            height: "120px",
                          }}
                        >
                          <div style={{}}>
                            <span>
                              주방이모 파트타임 오전 6시~오전 10시(4시간)
                            </span>
                          </div>
                          <div
                            className="text-sm"
                            style={{
                              color: "#73777B",
                              paddingTop: "5px",
                            }}
                          >
                            <span>밥을짓는홍여사 . 부평동</span>
                          </div>
                          <div className="font-bold pt-1">
                            <span>시급 10,100</span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li
                      className="flex  items-center gap-4"
                      style={{
                        height: "120px",
                      }}
                    >
                      <a href="#" className="flex-col flex justify-center">
                        <div className="img1">
                          <img
                            src="https://dnvefa72aowie.cloudfront.net/jobs/article/14115542/1665623315426/job-post-2115755419.jpeg?q=95&s=1440x1440&t=inside"
                            alt=""
                          />
                        </div>
                      </a>
                      <a href="">
                        <div
                          style={{
                            height: "120px",
                            marginTop: "25px",
                          }}
                        >
                          <div style={{}}>
                            <span>
                              주방이모 파트타임 오전 6시~오전 10시(4시간)
                            </span>
                          </div>
                          <div
                            className="text-sm"
                            style={{
                              color: "#73777B",
                              paddingTop: "5px",
                            }}
                          >
                            <span>밥을짓는홍여사 . 부평동</span>
                          </div>
                          <div className="font-bold pt-1">
                            <span>시급 10,100</span>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>{" "}
              <div className="mt-5">
                <div>
                  <ul className="grid grid-cols-2">
                    <li
                      className="flex  items-center gap-4"
                      style={{
                        height: "120px",
                      }}
                    >
                      <a href="#" className="flex-col flex justify-center">
                        <div className="img1">
                          <img
                            src="https://dnvefa72aowie.cloudfront.net/jobs/article/14115542/1665623315426/job-post-2115755419.jpeg?q=95&s=1440x1440&t=inside"
                            alt=""
                          />
                        </div>
                      </a>
                      <a href="">
                        <div
                          style={{
                            height: "120px",
                          }}
                        >
                          <div style={{}}>
                            <span>
                              주방이모 파트타임 오전 6시~오전 10시(4시간)
                            </span>
                          </div>
                          <div
                            className="text-sm"
                            style={{
                              color: "#73777B",
                              paddingTop: "5px",
                            }}
                          >
                            <span>밥을짓는홍여사 . 부평동</span>
                          </div>
                          <div className="font-bold pt-1">
                            <span>시급 10,100</span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li
                      className="flex  items-center gap-4"
                      style={{
                        height: "120px",
                      }}
                    >
                      <a href="#" className="flex-col flex justify-center">
                        <div className="img1">
                          <img
                            src="https://dnvefa72aowie.cloudfront.net/jobs/article/14115542/1665623315426/job-post-2115755419.jpeg?q=95&s=1440x1440&t=inside"
                            alt=""
                          />
                        </div>
                      </a>
                      <a href="">
                        <div
                          style={{
                            height: "120px",
                            marginTop: "25px",
                          }}
                        >
                          <div style={{}}>
                            <span>
                              주방이모 파트타임 오전 6시~오전 10시(4시간)
                            </span>
                          </div>
                          <div
                            className="text-sm"
                            style={{
                              color: "#73777B",
                              paddingTop: "5px",
                            }}
                          >
                            <span>밥을짓는홍여사 . 부평동</span>
                          </div>
                          <div className="font-bold pt-1">
                            <span>시급 10,100</span>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />
        <Footer />
      </div>
    );
  }
};

export default Realty;
