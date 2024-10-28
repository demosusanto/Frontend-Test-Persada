import React, { useEffect, useRef } from "react";
import "./css/style.css";

import runAnimations, { allLinks, allFunctions } from "./scripts";
import texts from "./data/texts";
import images from "./data/images";

//The data/*.js files are objects for default data, use the component with prop values of your choice/requirement

const Component = ({
  text1 = texts.text1,
  text2 = texts.text2,
  text3 = texts.text3,
  text4 = texts.text4,
  text5 = texts.text5,
  text6 = texts.text6,
  text7 = texts.text7,
  text8 = texts.text8,
  text9 = texts.text9,
  text10 = texts.text10,
  text11 = texts.text11,
  text12 = texts.text12,
  text13 = texts.text13,
  text14 = texts.text14,
  text15 = texts.text15,
  text16 = texts.text16,
  text17 = texts.text17,
  text18 = texts.text18,
  text19 = texts.text19,
  text20 = texts.text20,
  text21 = texts.text21,
  text22 = texts.text22,
  text23 = texts.text23,
  text24 = texts.text24,
  text25 = texts.text25,
  text26 = texts.text26,
  text27 = texts.text27,
  text28 = texts.text28,
  text29 = texts.text29,
  text30 = texts.text30,
  text31 = texts.text31,
  text32 = texts.text32,
  text33 = texts.text33,
  text34 = texts.text34,
  text35 = texts.text35,
  text36 = texts.text36,
  text37 = texts.text37,
  text38 = texts.text38,
  text39 = texts.text39,
  text40 = texts.text40,
  text41 = texts.text41,
  text42 = texts.text42,
  text43 = texts.text43,
  text44 = texts.text44,
  text45 = texts.text45,
  text46 = texts.text46,
  text47 = texts.text47,
  text48 = texts.text48,
}) => {
  return (
    <div className="relative flex justify-center p-[0px] box-border">
      <div className="w-[375px] min-h-[1552px] opacity-[1] z-[1]  rotate-[0deg]   overflow-hidden bg-[#f9f9f9ff]">
        {/* Search1 */}
        <section className="w-[331px] h-[40px] top-[124px] left-[22px] opacity-[1] z-[0]  rotate-[0deg] absolute">
          <div className="w-[331px] h-[40px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg]   rounded-tl-[16px] rounded-tr-[16px] rounded-br-[16px] rounded-bl-[16px] bg-[#130160ff] absolute"></div>

          <div className="w-[53px] h-[18px] top-[11px] left-[17px] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px] absolute">
            <span className="text-[12px] font-[Poppins] font-[400] no-underline none leading-[12px] whitespace-pre-wrap text-[#ffffffff]">
              {text1}
            </span>
          </div>

          <div className="w-[14.28px] h-[15px] top-[13px] left-[285.89px] opacity-[1] z-[2]  rotate-[0deg] overflow-hidden absolute">
            <div className="nodeBg-3633 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
          </div>
        </section>
        {/* Profile notif1 */}
        <section className="w-[325.32px] h-[45px] top-[47px] left-[25px] opacity-[1] z-[1]  rotate-[0deg] absolute">
          <div className="w-[18.32px] h-[22px] top-[11px] left-[307px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden absolute">
            <div className="nodeBg-3618 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
          </div>

          <div className="w-[5.03px] h-[5.28px] top-[12.5px] left-[318.27px] opacity-[1] z-[1]  rotate-[0deg] overflow-hidden absolute">
            <div className="nodeBg-3619 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
          </div>

          <div className="w-[45px] h-[45px] top-[0px] left-[0px] opacity-[1] z-[2]  rotate-[0deg] overflow-hidden absolute">
            <div className="nodeBg-3627 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
          </div>

          <div className="w-[87px] h-[21px] top-[7px] left-[59px] opacity-[1] z-[3]  rotate-[0deg]   text-left leading-[0px] absolute">
            <span className="text-[14px] font-[Poppins] font-[500] no-underline none leading-[14px] whitespace-pre-wrap text-[#555555ff]">
              {text2}
            </span>
          </div>

          <div className="w-[79px] h-[12px] top-[25px] left-[59px] opacity-[1] z-[4]  rotate-[0deg]   text-left leading-[0px] absolute">
            <span className="text-[8px] font-[Poppins] font-[400] no-underline none leading-[8px] whitespace-pre-wrap text-[#9c9898ff]">
              {text3}
            </span>
          </div>
        </section>
        {/* Doc1 */}
        <section className="w-[65px] h-[85px] top-[209px] left-[110px] opacity-[1] z-[2]  rotate-[0deg] absolute">
          <div className="w-[48px] h-[15px] top-[70px] left-[8px] opacity-[1] z-[0]  rotate-[0deg]   text-center leading-[0px] absolute">
            <span className="text-[10px] font-[Poppins] font-[400] no-underline none leading-[10px] whitespace-pre-wrap text-[#555555ff]">
              {text4}
            </span>
          </div>

          <div className="w-[65px] h-[65px] top-[0px] left-[0px] opacity-[1] z-[1]  rotate-[0deg]   rounded-full bg-[#f0f2f5ff] shadow-[0px_7px_30px_0px_rgba(53,110,195,0.25)] absolute"></div>

          <div className="w-[30px] h-[30px] top-[20px] left-[18px] opacity-[1] z-[2]  rotate-[0deg]   overflow-hidden absolute"></div>
        </section>
        {/* CV1 */}
        <section className="w-[65px] h-[85px] top-[209px] left-[22px] opacity-[1] z-[3]  rotate-[0deg] absolute">
          <div className="w-[41px] h-[15px] top-[70px] left-[12px] opacity-[1] z-[0]  rotate-[0deg]   text-center leading-[0px] absolute">
            <span className="text-[10px] font-[Poppins] font-[400] no-underline none leading-[10px] whitespace-pre-wrap text-[#555555ff]">
              {text5}
            </span>
          </div>

          <div className="w-[65px] h-[65px] top-[0px] left-[0px] opacity-[1] z-[1]  rotate-[0deg]   rounded-full bg-[#f0f2f5ff] shadow-[0px_7px_30px_0px_rgba(53,110,195,0.25)] absolute"></div>

          <div className="w-[30px] h-[30px] top-[20px] left-[18px] opacity-[1] z-[2]  rotate-[0deg]   overflow-hidden absolute"></div>
        </section>
        {/* Partners1 */}
        <section className="w-[65px] h-[85px] top-[209px] left-[199px] opacity-[1] z-[4]  rotate-[0deg] absolute">
          <div className="w-[42px] h-[15px] top-[70px] left-[11px] opacity-[1] z-[0]  rotate-[0deg]   text-center leading-[0px] absolute">
            <span className="text-[10px] font-[Poppins] font-[400] no-underline none leading-[10px] whitespace-pre-wrap text-[#555555ff]">
              {text6}
            </span>
          </div>

          <div className="w-[65px] h-[65px] top-[0px] left-[0px] opacity-[1] z-[1]  rotate-[0deg]   rounded-full bg-[#f0f2f5ff] shadow-[0px_7px_30px_0px_rgba(53,110,195,0.25)] absolute"></div>

          <div className="w-[30px] h-[30px] top-[20px] left-[18px] opacity-[1] z-[2]  rotate-[0deg]   overflow-hidden absolute"></div>
        </section>
        {/* tips trick1 */}
        <section className="w-[65px] h-[85px] top-[209px] left-[288px] opacity-[1] z-[5]  rotate-[0deg] absolute">
          <div className="w-[56px] h-[15px] top-[70px] left-[5px] opacity-[1] z-[0]  rotate-[0deg]   text-center leading-[0px] absolute">
            <span className="text-[10px] font-[Poppins] font-[400] no-underline none leading-[10px] whitespace-pre-wrap text-[#555555ff]">
              {text7}
            </span>
          </div>

          <div className="w-[65px] h-[65px] top-[0px] left-[0px] opacity-[1] z-[1]  rotate-[0deg]   rounded-full bg-[#f0f2f5ff] shadow-[0px_7px_30px_0px_rgba(53,110,195,0.25)] absolute"></div>

          <div className="w-[30px] h-[30px] top-[20px] left-[15px] opacity-[1] z-[2]  rotate-[0deg]   overflow-hidden absolute"></div>
        </section>
        {/* dilamar disimpan1 */}
        <section className="w-[331px] h-[122px] top-[348px] left-[22px] opacity-[1] z-[6]  rotate-[0deg] absolute">
          <div className="w-[331px] h-[122px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg]   rounded-tl-[6px] rounded-tr-[6px] rounded-br-[6px] rounded-bl-[6px] bg-[#130160ff] absolute"></div>

          <div className="w-[56px] h-[21px] top-[80px] left-[56px] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px] absolute">
            <span className="text-[14px] font-[Poppins] font-[400] no-underline none leading-[14px] whitespace-pre-wrap text-[#ffffffff]">
              {text8}
            </span>
          </div>

          <div className="w-[24px] h-[24px] top-[50px] left-[72px] opacity-[1] z-[2]  rotate-[0deg]   text-left leading-[0px] absolute">
            <span className="text-[16px] font-[Poppins] font-[600] no-underline none leading-[16px] whitespace-pre-wrap text-[#ffffffff]">
              {text9}
            </span>
          </div>

          <div className="w-[1px] h-[80px] top-[22px] left-[165.5px] opacity-[1] z-[3]  rotate-[0deg] overflow-hidden box-border absolute">
            <div className="nodeBg-4185 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
          </div>

          <div className="w-[25px] h-[25px] top-[16px] left-[71px] opacity-[1] z-[4]  rotate-[0deg]  scale-x-[-1]   overflow-hidden absolute"></div>

          <div className="w-[67px] h-[21px] top-[80px] left-[219px] opacity-[1] z-[5]  rotate-[0deg]   text-left leading-[0px] absolute">
            <span className="text-[14px] font-[Poppins] font-[400] no-underline none leading-[14px] whitespace-pre-wrap text-[#ffffffff]">
              {text10}
            </span>
          </div>

          <div className="w-[20px] h-[24px] top-[50px] left-[241px] opacity-[1] z-[6]  rotate-[0deg]   text-left leading-[0px] absolute">
            <span className="text-[16px] font-[Poppins] font-[600] no-underline none leading-[16px] whitespace-pre-wrap text-[#ffffffff]">
              {text11}
            </span>
          </div>

          <div className="w-[25px] h-[25px] top-[16px] left-[240px] opacity-[1] z-[7]  rotate-[0deg]  scale-x-[-1]   overflow-hidden absolute"></div>
        </section>
        {/* tipe pekerjaan1 */}
        <section className="w-[331px] h-[204px] top-[516px] left-[22px] opacity-[1] z-[7]  rotate-[0deg] absolute">
          <div className="w-[152px] h-[170px] top-[34px] left-[0px] opacity-[1] z-[0]  rotate-[0deg]   rounded-tl-[6px] rounded-tr-[6px] rounded-br-[6px] rounded-bl-[6px] bg-[#afecfeff] absolute"></div>

          <div className="w-[159px] h-[75px] top-[34px] left-[172px] opacity-[1] z-[1]  rotate-[0deg]   rounded-tl-[6px] rounded-tr-[6px] rounded-br-[6px] rounded-bl-[6px] bg-[#beaffeff] absolute"></div>

          <div className="w-[159px] h-[75px] top-[129px] left-[172px] opacity-[1] z-[2]  rotate-[0deg]   rounded-tl-[6px] rounded-tr-[6px] rounded-br-[6px] rounded-bl-[6px] bg-[#ffd6adff] absolute"></div>

          <div className="w-[84px] h-[21px] top-[146px] left-[38px] opacity-[1] z-[3]  rotate-[0deg]   text-left leading-[0px] absolute">
            <span className="text-[14px] font-[Poppins] font-[400] no-underline none leading-[14px] whitespace-pre-wrap text-[#0d0140ff]">
              {text12}
            </span>
          </div>

          <div className="w-[45px] h-[24px] top-[119px] left-[56px] opacity-[1] z-[4]  rotate-[0deg]   text-left leading-[0px] absolute">
            <span className="text-[16px] font-[Poppins] font-[600] no-underline none leading-[16px] whitespace-pre-wrap text-[#0d0140ff]">
              {text13}
            </span>
          </div>

          <div className="w-[45px] h-[24px] top-[51px] left-[223px] opacity-[1] z-[5]  rotate-[0deg]   text-left leading-[0px] absolute">
            <span className="text-[16px] font-[Poppins] font-[600] no-underline none leading-[16px] whitespace-pre-wrap text-[#0d0140ff]">
              {text14}
            </span>
          </div>

          <div className="w-[44px] h-[24px] top-[146px] left-[223px] opacity-[1] z-[6]  rotate-[0deg]   text-left leading-[0px] absolute">
            <span className="text-[16px] font-[Poppins] font-[600] no-underline none leading-[16px] whitespace-pre-wrap text-[#0d0140ff]">
              {text15}
            </span>
          </div>

          <div className="w-[66px] h-[21px] top-[172px] left-[215px] opacity-[1] z-[7]  rotate-[0deg]   text-left leading-[0px] absolute">
            <span className="text-[14px] font-[Poppins] font-[400] no-underline none leading-[14px] whitespace-pre-wrap text-[#0d0140ff]">
              {text16}
            </span>
          </div>

          <div className="w-[61px] h-[21px] top-[77px] left-[218px] opacity-[1] z-[8]  rotate-[0deg]   text-left leading-[0px] absolute">
            <span className="text-[14px] font-[Poppins] font-[400] no-underline none leading-[14px] whitespace-pre-wrap text-[#0d0140ff]">
              {text17}
            </span>
          </div>

          <div className="w-[35px] h-[35px] top-[71px] left-[60px] opacity-[1] z-[9]  rotate-[0deg]   overflow-hidden absolute"></div>

          <div className="w-[121px] h-[24px] top-[0px] left-[0px] opacity-[1] z-[10]  rotate-[0deg]   text-left leading-[0px] absolute">
            <span className="text-[16px] font-[Poppins] font-[600] no-underline none leading-[16px] whitespace-pre-wrap text-[#555555ff]">
              {text18}
            </span>
          </div>
        </section>
        {/* company1 */}
        <section className="w-[488px] h-[117px] top-[765px] left-[22px] opacity-[1] z-[8]  rotate-[0deg] absolute">
          <div className="w-[100px] h-[24px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px] absolute">
            <span className="text-[16px] font-[Poppins] font-[600] no-underline none leading-[16px] whitespace-pre-wrap text-[#555555ff]">
              {text19}
            </span>
          </div>

          <div className="w-[230px] h-[85px] top-[32px] left-[1px] opacity-[1] z-[1]  rotate-[0deg]   rounded-tl-[6px] rounded-tr-[6px] rounded-br-[6px] rounded-bl-[6px] bg-[#ffffffff] shadow-[0px_7px_30px_0px_rgba(53,110,195,0.25)] absolute"></div>

          <div className="w-[230px] h-[85px] top-[32px] left-[258px] opacity-[1] z-[2]  rotate-[0deg]   rounded-tl-[6px] rounded-tr-[6px] rounded-br-[6px] rounded-bl-[6px] bg-[#ffffffff] shadow-[0px_7px_30px_0px_rgba(53,110,195,0.25)] absolute"></div>

          <div className="w-[144.48px] h-[34.41px] top-[53px] left-[308px] opacity-[1] z-[3]  rotate-[0deg] absolute">
            <div className="w-[144.48px] h-[34.41px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg] absolute">
              <div className="w-[144.48px] h-[34.41px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg] absolute">
                <div className="w-[29.87px] h-[24.83px] top-[0px] left-[114.61px] opacity-[1] z-[0]  rotate-[0deg] absolute">
                  <div className="w-[12.82px] h-[16.62px] top-[3.86px] left-[17.04px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden absolute">
                    <div className="nodeBg-4645 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                  </div>

                  <div className="w-[3.62px] h-[12.87px] top-[6.99px] left-[17.04px] opacity-[1] z-[1]  rotate-[0deg] overflow-hidden absolute">
                    <div className="nodeBg-4646 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                  </div>

                  <div className="w-[26.25px] h-[24.83px] top-[0px] left-[0px] opacity-[1] z-[2]  rotate-[0deg] overflow-hidden absolute">
                    <div className="nodeBg-4647 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                  </div>
                </div>

                <div className="w-[45px] h-[23.14px] top-[11.28px] left-[0px] opacity-[1] z-[1]  rotate-[0deg] overflow-hidden absolute">
                  <div className="nodeBg-4648 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[148px] h-[25px] top-[62px] left-[41px] opacity-[1] z-[4]  rotate-[0deg]   overflow-hidden absolute">
            <div className="w-[148px] h-[25px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg] absolute">
              <div className="w-[18.44px] h-[18.04px] top-[6.96px] left-[57.86px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden absolute">
                <div className="nodeBg-4629 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
              </div>

              <div className="w-[16.91px] h-[18.04px] top-[6.96px] left-[14.75px] opacity-[1] z-[1]  rotate-[0deg] overflow-hidden absolute">
                <div className="nodeBg-4630 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
              </div>

              <div className="w-[5.8px] h-[25px] top-[0px] left-[34.08px] opacity-[1] z-[2]  rotate-[0deg] overflow-hidden absolute">
                <div className="nodeBg-4631 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
              </div>

              <div className="w-[18.86px] h-[24.24px] top-[0.76px] left-[0px] opacity-[1] z-[3]  rotate-[0deg] overflow-hidden absolute">
                <div className="nodeBg-4632 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
              </div>

              <div className="w-[17.29px] h-[24.71px] top-[0px] left-[42.08px] opacity-[1] z-[4]  rotate-[0deg] overflow-hidden absolute">
                <div className="nodeBg-4633 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
              </div>

              <div className="w-[26.75px] h-[17.75px] top-[6.96px] left-[78.66px] opacity-[1] z-[5]  rotate-[0deg] overflow-hidden absolute">
                <div className="nodeBg-4634 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
              </div>

              <div className="w-[13.67px] h-[18.04px] top-[6.96px] left-[107.9px] opacity-[1] z-[6]  rotate-[0deg] overflow-hidden absolute">
                <div className="nodeBg-4635 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
              </div>

              <div className="w-[16.91px] h-[18.04px] top-[6.96px] left-[122.87px] opacity-[1] z-[7]  rotate-[0deg] overflow-hidden absolute">
                <div className="nodeBg-4636 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
              </div>

              <div className="w-[5.8px] h-[25px] top-[0px] left-[142.2px] opacity-[1] z-[8]  rotate-[0deg] overflow-hidden absolute">
                <div className="nodeBg-4637 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
              </div>
            </div>
          </div>
        </section>
        {/* Job Recommendation1 */}
        <section className="w-[391px] h-[594px] top-[930px] left-[20px] opacity-[1] z-[9]  rotate-[0deg] absolute">
          <div className="w-[198px] h-[24px] top-[0px] left-[1px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px] absolute">
            <span className="text-[16px] font-[Poppins] font-[600] no-underline none leading-[16px] whitespace-pre-wrap text-[#555555ff]">
              {text20}
            </span>
          </div>

          <div className="w-[81px] h-[36px] top-[44px] left-[2px] opacity-[1] z-[1]  rotate-[0deg] absolute">
            <div className="w-[81px] h-[36px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg]   rounded-tl-[28px] rounded-tr-[28px] rounded-br-[28px] rounded-bl-[28px] bg-[#130160ff] absolute"></div>

            <div className="w-[44px] h-[18px] top-[9px] left-[19px] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px] absolute">
              <span className="text-[12px] font-[Poppins] font-[600] no-underline none leading-[12px] whitespace-pre-wrap text-[#ffffffff]">
                {text21}
              </span>
            </div>
          </div>

          <div className="w-[81px] h-[36px] top-[44px] left-[94px] opacity-[1] z-[2]  rotate-[0deg] absolute">
            <div className="w-[81px] h-[36px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg]   rounded-tl-[28px] rounded-tr-[28px] rounded-br-[28px] rounded-bl-[28px] bg-[#ffffffff] box-border border-l-[1px] border-l-[#130160ff] border-r-[1px] border-r-[#130160ff] border-t-[1px] border-t-[#130160ff] border-b-[1px] border-b-[#130160ff] absolute"></div>

            <div className="w-[42px] h-[18px] top-[9px] left-[19px] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px] absolute">
              <span className="text-[12px] font-[Poppins] font-[600] no-underline none leading-[12px] whitespace-pre-wrap text-[#130160ff]">
                {text22}
              </span>
            </div>
          </div>

          <div className="w-[81px] h-[36px] top-[44px] left-[186px] opacity-[1] z-[3]  rotate-[0deg] absolute">
            <div className="w-[81px] h-[36px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg]   rounded-tl-[28px] rounded-tr-[28px] rounded-br-[28px] rounded-bl-[28px] bg-[#ffffffff] box-border border-l-[1px] border-l-[#130160ff] border-r-[1px] border-r-[#130160ff] border-t-[1px] border-t-[#130160ff] border-b-[1px] border-b-[#130160ff] absolute"></div>

            <div className="w-[49px] h-[18px] top-[9px] left-[16px] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px] absolute">
              <span className="text-[12px] font-[Poppins] font-[600] no-underline none leading-[12px] whitespace-pre-wrap text-[#130160ff]">
                {text23}
              </span>
            </div>
          </div>

          <div className="w-[113px] h-[36px] top-[44px] left-[278px] opacity-[1] z-[4]  rotate-[0deg] absolute">
            <div className="w-[113px] h-[36px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg]   rounded-tl-[28px] rounded-tr-[28px] rounded-br-[28px] rounded-bl-[28px] bg-[#ffffffff] box-border border-l-[1px] border-l-[#130160ff] border-r-[1px] border-r-[#130160ff] border-t-[1px] border-t-[#130160ff] border-b-[1px] border-b-[#130160ff] absolute"></div>

            <div className="w-[79px] h-[18px] top-[9px] left-[16px] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px] absolute">
              <span className="text-[12px] font-[Poppins] font-[600] no-underline none leading-[12px] whitespace-pre-wrap text-[#130160ff]">
                {text24}
              </span>
            </div>
          </div>

          <div className="w-[335px] h-[149px] top-[279px] left-[0px] opacity-[1] z-[5]  rotate-[0deg] absolute">
            <div className="w-[375px] h-[209px] top-[-23px] left-[-20px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden absolute">
              <div className="nodeBg-47171 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
            </div>

            <div className="w-[77px] h-[25px] top-[107.95px] left-[134px] opacity-[1] z-[1]  rotate-[0deg] absolute">
              <div className="w-[77px] h-[25px] top-[0px] left-[0px] opacity-[0.2] z-[0]  rotate-[0deg]   rounded-tl-[8px] rounded-tr-[8px] rounded-br-[8px] rounded-bl-[8px] bg-[#cbc9d4ff] absolute"></div>

              <div className="w-[42px] h-[15px] top-[6.05px] left-[15px] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px] absolute">
                <span className="text-[10px] font-[Poppins] font-[400] no-underline none leading-[10px] whitespace-pre-wrap text-[#524b6bff]">
                  {text25}
                </span>
              </div>
            </div>

            <div className="w-[77px] h-[25px] top-[108.2px] left-[239px] opacity-[1] z-[2]  rotate-[0deg] absolute">
              <div className="w-[77px] h-[25px] top-[0px] left-[0px] opacity-[0.2] z-[0]  rotate-[0deg]   rounded-tl-[8px] rounded-tr-[8px] rounded-br-[8px] rounded-bl-[8px] bg-[#afecfeff] absolute"></div>

              <div className="w-[32px] h-[15px] top-[5.8px] left-[23px] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px] absolute">
                <span className="text-[10px] font-[Poppins] font-[400] no-underline none leading-[10px] whitespace-pre-wrap text-[#524b6bff]">
                  {text26}
                </span>
              </div>
            </div>

            <div className="w-[107px] h-[25px] top-[108.2px] left-[19px] opacity-[1] z-[3]  rotate-[0deg] absolute">
              <div className="w-[107px] h-[25px] top-[0px] left-[0px] opacity-[0.2] z-[0]  rotate-[0deg]   rounded-tl-[8px] rounded-tr-[8px] rounded-br-[8px] rounded-bl-[8px] bg-[#cbc9d4ff] backdrop-blur-[1px] absolute"></div>

              <div className="w-[64px] h-[15px] top-[5.8px] left-[19px] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px] absolute">
                <span className="text-[10px] font-[Poppins] font-[400] no-underline none leading-[10px] whitespace-pre-wrap text-[#524b6bff]">
                  {text27}
                </span>
              </div>
            </div>

            <div className="w-[138px] h-[21px] top-[79.95px] left-[20px] opacity-[1] z-[4]  rotate-[0deg]   text-left leading-[0px] absolute">
              <span className="text-[14px] font-[Poppins] font-[500] no-underline none leading-[14px] whitespace-pre-wrap text-[#150b3dff]">
                {text28}
              </span>
              <span className="text-[12px] font-[Poppins] font-[500] no-underline none leading-[12px] whitespace-pre-wrap text-[#aaa6b9ff]">
                {text29}
              </span>
            </div>

            <div className="w-[72px] h-[18px] top-[43px] left-[138px] opacity-[1] z-[5]  rotate-[0deg]   text-left leading-[0px] absolute">
              <span className="text-[12px] font-[Poppins] font-[400] no-underline none leading-[12px] whitespace-pre-wrap text-[#524b6bff]">
                {text30}
              </span>
            </div>

            <div className="w-[136px] h-[21px] top-[20.95px] left-[70px] opacity-[1] z-[6]  rotate-[0deg]   text-left leading-[0px] absolute">
              <span className="text-[14px] font-[Poppins] font-[700] no-underline none leading-[14px] whitespace-pre-wrap text-[#150b3dff]">
                {text31}
              </span>
            </div>

            <div className="w-[59px] h-[18px] top-[42.95px] left-[70px] opacity-[1] z-[7]  rotate-[0deg]   text-left leading-[0px] absolute">
              <span className="text-[12px] font-[Poppins] font-[400] no-underline none leading-[12px] whitespace-pre-wrap text-[#524b6bff]">
                {text32}
              </span>
            </div>

            <div className="w-[2px] h-[2px] top-[52px] left-[133px] opacity-[1] z-[8]  rotate-[0deg]   rounded-full bg-[#524b6bff] absolute"></div>

            <div className="w-[35px] h-[35px] top-[24px] left-[19px] opacity-[1] z-[9]  rotate-[0deg]   overflow-hidden rounded-tl-[28px] rounded-tr-[28px] rounded-br-[28px] rounded-bl-[28px] absolute"></div>

            <div className="w-[20px] h-[20px] top-[24px] left-[296px] opacity-[1] z-[10]  rotate-[0deg]  scale-x-[-1]   overflow-hidden absolute"></div>
          </div>

          <div className="w-[335px] h-[149px] top-[113px] left-[0px] opacity-[1] z-[6]  rotate-[0deg] absolute">
            <div className="w-[375px] h-[209px] top-[-23px] left-[-20px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden absolute">
              <div className="nodeBg-47150 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
            </div>

            <div className="w-[77px] h-[25px] top-[107.95px] left-[134px] opacity-[1] z-[1]  rotate-[0deg] absolute">
              <div className="w-[77px] h-[25px] top-[0px] left-[0px] opacity-[0.2] z-[0]  rotate-[0deg]   rounded-tl-[8px] rounded-tr-[8px] rounded-br-[8px] rounded-bl-[8px] bg-[#cbc9d4ff] absolute"></div>

              <div className="w-[42px] h-[15px] top-[6.05px] left-[15px] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px] absolute">
                <span className="text-[10px] font-[Poppins] font-[400] no-underline none leading-[10px] whitespace-pre-wrap text-[#524b6bff]">
                  {text33}
                </span>
              </div>
            </div>

            <div className="w-[77px] h-[25px] top-[108.2px] left-[239px] opacity-[1] z-[2]  rotate-[0deg] absolute">
              <div className="w-[77px] h-[25px] top-[0px] left-[0px] opacity-[0.2] z-[0]  rotate-[0deg]   rounded-tl-[8px] rounded-tr-[8px] rounded-br-[8px] rounded-bl-[8px] bg-[#beaffeff] absolute"></div>

              <div className="w-[32px] h-[15px] top-[5.8px] left-[23px] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px] absolute">
                <span className="text-[10px] font-[Poppins] font-[400] no-underline none leading-[10px] whitespace-pre-wrap text-[#524b6bff]">
                  {text34}
                </span>
              </div>
            </div>

            <div className="w-[107px] h-[25px] top-[108.2px] left-[19px] opacity-[1] z-[3]  rotate-[0deg] absolute">
              <div className="w-[107px] h-[25px] top-[0px] left-[0px] opacity-[0.2] z-[0]  rotate-[0deg]   rounded-tl-[8px] rounded-tr-[8px] rounded-br-[8px] rounded-bl-[8px] bg-[#cbc9d4ff] backdrop-blur-[1px] absolute"></div>

              <div className="w-[78px] h-[15px] top-[5.8px] left-[12px] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px] absolute">
                <span className="text-[10px] font-[Poppins] font-[400] no-underline none leading-[10px] whitespace-pre-wrap text-[#524b6bff]">
                  {text35}
                </span>
              </div>
            </div>

            <div className="w-[134px] h-[21px] top-[79.95px] left-[20px] opacity-[1] z-[4]  rotate-[0deg]   text-left leading-[0px] absolute">
              <span className="text-[14px] font-[Poppins] font-[500] no-underline none leading-[14px] whitespace-pre-wrap text-[#150b3dff]">
                {text36}
              </span>
              <span className="text-[12px] font-[Poppins] font-[500] no-underline none leading-[12px] whitespace-pre-wrap text-[#aaa6b9ff]">
                {text37}
              </span>
            </div>

            <div className="w-[72px] h-[18px] top-[43px] left-[138px] opacity-[1] z-[5]  rotate-[0deg]   text-left leading-[0px] absolute">
              <span className="text-[12px] font-[Poppins] font-[400] no-underline none leading-[12px] whitespace-pre-wrap text-[#524b6bff]">
                {text38}
              </span>
            </div>

            <div className="w-[124px] h-[21px] top-[20.95px] left-[70px] opacity-[1] z-[6]  rotate-[0deg]   text-left leading-[0px] absolute">
              <span className="text-[14px] font-[Poppins] font-[700] no-underline none leading-[14px] whitespace-pre-wrap text-[#150b3dff]">
                {text39}
              </span>
            </div>

            <div className="w-[60px] h-[18px] top-[42.95px] left-[70px] opacity-[1] z-[7]  rotate-[0deg]   text-left leading-[0px] absolute">
              <span className="text-[12px] font-[Poppins] font-[400] no-underline none leading-[12px] whitespace-pre-wrap text-[#524b6bff]">
                {text40}
              </span>
            </div>

            <div className="w-[2px] h-[2px] top-[52px] left-[133px] opacity-[1] z-[8]  rotate-[0deg]   rounded-full bg-[#524b6bff] absolute"></div>

            <div className="w-[35px] h-[35px] top-[24px] left-[19px] opacity-[1] z-[9]  rotate-[0deg]   overflow-hidden rounded-tl-[28px] rounded-tr-[28px] rounded-br-[28px] rounded-bl-[28px] absolute"></div>

            <div className="w-[20px] h-[20px] top-[24px] left-[296px] opacity-[1] z-[10]  rotate-[0deg]  scale-x-[-1]   overflow-hidden absolute"></div>
          </div>

          <div className="w-[335px] h-[149px] top-[445px] left-[0px] opacity-[1] z-[7]  rotate-[0deg] absolute">
            <div className="w-[375px] h-[200px] top-[-23px] left-[-20px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden absolute">
              <div className="nodeBg-4683 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
            </div>

            <div className="w-[77px] h-[25px] top-[107.95px] left-[134px] opacity-[1] z-[1]  rotate-[0deg] absolute">
              <div className="w-[77px] h-[25px] top-[0px] left-[0px] opacity-[0.2] z-[0]  rotate-[0deg]   rounded-tl-[8px] rounded-tr-[8px] rounded-br-[8px] rounded-bl-[8px] bg-[#cbc9d4ff] absolute"></div>

              <div className="w-[42px] h-[15px] top-[6.05px] left-[15px] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px] absolute">
                <span className="text-[10px] font-[Poppins] font-[400] no-underline none leading-[10px] whitespace-pre-wrap text-[#524b6bff]">
                  {text41}
                </span>
              </div>
            </div>

            <div className="w-[77px] h-[25px] top-[108.2px] left-[239px] opacity-[1] z-[2]  rotate-[0deg] absolute">
              <div className="w-[77px] h-[25px] top-[0px] left-[0px] opacity-[0.2] z-[0]  rotate-[0deg]   rounded-tl-[8px] rounded-tr-[8px] rounded-br-[8px] rounded-bl-[8px] bg-[#ffd6adff] absolute"></div>

              <div className="w-[32px] h-[15px] top-[5.8px] left-[23px] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px] absolute">
                <span className="text-[10px] font-[Poppins] font-[400] no-underline none leading-[10px] whitespace-pre-wrap text-[#524b6bff]">
                  {text42}
                </span>
              </div>
            </div>

            <div className="w-[107px] h-[25px] top-[108.2px] left-[19px] opacity-[1] z-[3]  rotate-[0deg] absolute">
              <div className="w-[107px] h-[25px] top-[0px] left-[0px] opacity-[0.2] z-[0]  rotate-[0deg]   rounded-tl-[8px] rounded-tr-[8px] rounded-br-[8px] rounded-bl-[8px] bg-[#cbc9d4ff] backdrop-blur-[1px] absolute"></div>

              <div className="w-[64px] h-[15px] top-[5.8px] left-[19px] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px] absolute">
                <span className="text-[10px] font-[Poppins] font-[400] no-underline none leading-[10px] whitespace-pre-wrap text-[#524b6bff]">
                  {text43}
                </span>
              </div>
            </div>

            <div className="w-[129px] h-[21px] top-[79.95px] left-[20px] opacity-[1] z-[4]  rotate-[0deg]   text-left leading-[0px] absolute">
              <span className="text-[14px] font-[Poppins] font-[500] no-underline none leading-[14px] whitespace-pre-wrap text-[#150b3dff]">
                {text44}
              </span>
              <span className="text-[12px] font-[Poppins] font-[500] no-underline none leading-[12px] whitespace-pre-wrap text-[#aaa6b9ff]">
                {text45}
              </span>
            </div>

            <div className="w-[95px] h-[18px] top-[43px] left-[128px] opacity-[1] z-[5]  rotate-[0deg]   text-left leading-[0px] absolute">
              <span className="text-[12px] font-[Poppins] font-[400] no-underline none leading-[12px] whitespace-pre-wrap text-[#524b6bff]">
                {text46}
              </span>
            </div>

            <div className="w-[84px] h-[21px] top-[20.95px] left-[70px] opacity-[1] z-[6]  rotate-[0deg]   text-left leading-[0px] absolute">
              <span className="text-[14px] font-[Poppins] font-[700] no-underline none leading-[14px] whitespace-pre-wrap text-[#150b3dff]">
                {text47}
              </span>
            </div>

            <div className="w-[46px] h-[18px] top-[42.95px] left-[70px] opacity-[1] z-[7]  rotate-[0deg]   text-left leading-[0px] absolute">
              <span className="text-[12px] font-[Poppins] font-[400] no-underline none leading-[12px] whitespace-pre-wrap text-[#524b6bff]">
                {text48}
              </span>
            </div>

            <div className="w-[2px] h-[2px] top-[52px] left-[121px] opacity-[1] z-[8]  rotate-[0deg]   rounded-full bg-[#524b6bff] absolute"></div>

            <div className="w-[35px] h-[35px] top-[24px] left-[19px] opacity-[1] z-[9]  rotate-[0deg]   overflow-hidden rounded-tl-[28px] rounded-tr-[28px] rounded-br-[28px] rounded-bl-[28px] absolute"></div>

            <div className="w-[20px] h-[20px] top-[24px] left-[296px] opacity-[1] z-[10]  rotate-[0deg]  scale-x-[-1]   overflow-hidden absolute"></div>
          </div>
        </section>
        {/* Menu bar1 */}
        <section className="w-[375px] h-[72px] top-[1480px] left-[0px] opacity-[1] z-[10]  rotate-[0deg] absolute">
          <div className="w-[375px] h-[98px] top-[-26px] left-[0px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden absolute">
            <div className="nodeBg-4650 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
          </div>

          <div className="w-[24px] h-[24px] top-[15.51px] left-[28px] opacity-[1] z-[1]  rotate-[0deg] absolute">
            <div className="w-[24px] h-[24px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg] absolute"></div>

            <div className="w-[20px] h-[20.11px] top-[1.89px] left-[2px] opacity-[1] z-[1]  rotate-[0deg] overflow-hidden box-border absolute">
              <div className="nodeBg-4653 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
            </div>
          </div>

          <div className="w-[36px] h-[36px] top-[10px] left-[170px] opacity-[1] z-[2]  rotate-[0deg] absolute">
            <div className="w-[24px] h-[24px] top-[6px] left-[6px] opacity-[1] z-[0]  rotate-[0deg] absolute"></div>

            <div className="w-[36px] h-[36px] top-[0px] left-[0px] opacity-[1] z-[1]  rotate-[0deg]   rounded-full bg-[#130160ff] shadow-[0px_4px_62px_0px_rgba(153,170,197,0.18000000715255737)] absolute"></div>

            <div className="w-[1.5px] h-[11.5px] top-[12.25px] left-[17.25px] opacity-[1] z-[2]  rotate-[0deg] overflow-hidden box-border absolute">
              <div className="nodeBg-4657 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
            </div>

            <div className="w-[11.5px] h-[1.5px] top-[17.25px] left-[12.25px] opacity-[1] z-[3]  rotate-[0deg] overflow-hidden box-border absolute">
              <div className="nodeBg-4658 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
            </div>
          </div>

          <div className="w-[24px] h-[24px] top-[15.51px] left-[324px] opacity-[1] z-[3]  rotate-[0deg] absolute">
            <div className="w-[24px] h-[24px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg] absolute"></div>

            <div className="w-[15.34px] h-[19.08px] top-[2.09px] left-[4.33px] opacity-[1] z-[1]  rotate-[0deg] overflow-hidden box-border absolute">
              <div className="nodeBg-4661 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
            </div>
          </div>

          <div className="w-[24px] h-[24px] top-[15.51px] left-[250px] opacity-[1] z-[4]  rotate-[0deg] absolute">
            <div className="w-[24px] h-[24px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg] absolute"></div>

            <div className="w-[20px] h-[17.79px] top-[3px] left-[2px] opacity-[1] z-[1]  rotate-[0deg] overflow-hidden box-border absolute">
              <div className="nodeBg-4664 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
            </div>
          </div>

          <div className="w-[24px] h-[24px] top-[15.51px] left-[102px] opacity-[1] z-[5]  rotate-[0deg] absolute">
            <div className="w-[24px] h-[24px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg] absolute"></div>

            <div className="w-[16.46px] h-[15.92px] top-[5.85px] left-[3.77px] opacity-[1] z-[1]  rotate-[0deg] overflow-hidden box-border absolute">
              <div className="nodeBg-4667 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
            </div>

            <div className="w-[7.1px] h-[7.1px] top-[2.29px] left-[8.45px] opacity-[1] z-[2]  rotate-[0deg]   rounded-full box-border border-l-[1.5px] border-l-[#a49eb5ff] border-r-[1.5px] border-r-[#a49eb5ff] border-t-[1.5px] border-t-[#a49eb5ff] border-b-[1.5px] border-b-[#a49eb5ff] absolute"></div>

            <div className="w-[7.1px] h-[7.1px] top-[13.92px] left-[14.9px] opacity-[1] z-[3]  rotate-[0deg]   rounded-full box-border border-l-[1.5px] border-l-[#a49eb5ff] border-r-[1.5px] border-r-[#a49eb5ff] border-t-[1.5px] border-t-[#a49eb5ff] border-b-[1.5px] border-b-[#a49eb5ff] absolute"></div>

            <div className="w-[7.1px] h-[7.1px] top-[13.92px] left-[2px] opacity-[1] z-[4]  rotate-[0deg]   rounded-full box-border border-l-[1.5px] border-l-[#a49eb5ff] border-r-[1.5px] border-r-[#a49eb5ff] border-t-[1.5px] border-t-[#a49eb5ff] border-b-[1.5px] border-b-[#a49eb5ff] absolute"></div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Component;
