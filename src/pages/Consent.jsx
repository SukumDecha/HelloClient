import { useNavigate } from "react-router-dom";

const ConsentPage = () => {
  const navigate = useNavigate();

  const handleConsent = (isAccepted) => {
    if (isAccepted) {
      navigate("/PickYourRole"); // ลิงก์ไปยังหน้าเลือก Roles
    } else {
      alert("คุณไม่สามารถเข้าใช้งานได้");
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-[url('../src/img/Herobg.png')] bg-cover bg-center text-white">
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative flex flex-col text-black py-20 px-30 bg-[#f0f0f0ca] h-165 items-center rounded-2xl">
        <p className="text-base mb-4 ">ประกาศ</p>

        <p>คณะเทคโนโลยีสารสนเทศ</p>
        <p>ข้อปฏิบัติสำหรับผู้มีสิทธิ์ของห้องเรียนและห้องอบรมคอมพิวเตอร์</p>
        <br />
        <p>-------------------------------</p>
        <br />
        <p className="text-sm mb-6 text-center">
          การจองห้องเรียนหรือห้องอบรมคอมพิวเตอร์ อาจารย์ผู้สอน,
          <br />
          ผู้ช่วยสอนหรือเจ้าหน้าที่ที่มีสิทธิ์จองห้องเป็นผู้รับผิดชอบและดูแล
          <br />
          ความเรียบร้อยหลังเสร็จสิ้นการใช้งานทุกครั้ง ทั้งนี้ หากคณะฯตรวจสอบ
          <br />
          แล้วพบอุปกรณ์การเรียนการสอนในห้องเกิดความเสียหาย หรือไม่มีการ
          <br />
          ปิดไฟ, ปิดแอร์ หลังจากการใช้งาน คณะฯถือเป็นความบกพร่องในการ
          <br />
          ปฏิบัติงานของผู้จอง และผู้จองอาจต้องชดใช้ค่าเสียหาย
          <br />
        </p>
        <p className="text-end ml-30 ">
          ทั้งนี้ ตั้งแต่วันที่ 28 ตุลาคม พ.ศ. 2548
          <br />
          <br />
          ประกาศ ณ วันที่ 28 ตุลาคม พ.ศ. 2548
          <br />
          <br />
          คณะเทคโนโลยีสารสนเทศ
        </p>

        <div className="mt-10 space-x-6 ">
          <button
            className="bg-white text-[#455E86] py-2 px-6 rounded-full hover:bg-zinc-300 hover:cursor-pointer"
            onClick={() => handleConsent(true)}
          >
            ยินยอม
          </button>
          <button
            className="bg-white text-[#455E86] py-2 px-6 rounded-full hover:bg-zinc-300 hover:cursor-pointer"
            onClick={() => handleConsent(false)}
          >
            ไม่ยินยอม
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConsentPage;
