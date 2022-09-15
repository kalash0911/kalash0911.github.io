import React from "react";
import { useTranslation } from "react-i18next";

export const TestDone = () => {
  const { t } = useTranslation();
  return (
    <div className="test-done-wrap">
      <div className="done-img">
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M79.4229 58.3208H78.1363C78.722 57.6466 79.0674 56.8174 79.0674 55.9215V53.9764C79.0674 51.7267 76.889 49.8961 74.2102 49.8929L67.9263 49.788L68.6576 49.0613C70.5541 47.1648 70.8015 44.3263 69.2097 42.7344L67.8338 41.3594C67.198 40.7236 66.3625 40.3806 65.4674 40.3195C67.1643 38.4292 67.3326 35.7505 65.8034 34.2204L64.4283 32.8453C62.8364 31.2534 59.9978 31.5008 58.1015 33.3974L57.1923 34.3065C57.1297 33.4162 56.7875 32.5854 56.1532 31.9519L54.7782 30.5769C53.985 29.7837 52.8699 29.4195 51.6382 29.5519C50.477 29.6764 49.347 30.2347 48.4559 31.1242L31.1828 47.8281C31.5806 46.3849 31.9283 44.6975 31.9283 43.2105C31.9283 39.4745 29.36 36.4356 26.2028 36.4356C23.0455 36.4356 20.4773 39.4745 20.4773 43.2105C20.4773 46.1705 18.8407 50.2759 18.7225 50.5687C18.5659 50.9054 16.9708 54.4205 16.2951 58.9246C15.8824 61.6747 15.9028 64.2212 16.3546 66.4936C16.9294 69.3806 18.2026 71.8268 20.1391 73.7634C24.1186 77.7429 27.5553 81.1796 31.288 83.0839C33.4203 84.1724 35.5806 84.715 37.8546 84.715C39.3902 84.715 40.9782 84.466 42.6446 83.9711C42.726 84.0064 42.8145 84.0299 42.9077 84.0377L46.26 84.318C46.2709 84.3188 46.2811 84.3196 46.2921 84.3204L65.8384 85.2076C65.8509 85.2083 65.8643 85.2083 65.8768 85.2083C68.5587 85.2083 70.7411 83.3768 70.7411 81.1248V79.1797C70.7411 78.3113 70.4161 77.5056 69.8633 76.8424L75.8081 76.8612H75.8105C78.4924 76.8612 80.6748 75.0296 80.6748 72.7776V70.8325C80.6748 69.9328 80.3264 69.0997 79.7367 68.4246C82.2729 68.2884 84.2861 66.5124 84.2861 64.3497V62.4046C84.2877 60.1535 82.1053 58.3211 79.4234 58.3211L79.4229 58.3208ZM74.1891 51.5764H74.2032C75.9274 51.5764 77.3839 52.675 77.3839 53.9765V55.9215C77.3839 57.2206 75.929 58.32 74.207 58.3216H69.1368C69.1376 57.317 68.7938 56.3664 68.0883 55.6615L66.7133 54.2865C66.3515 53.9247 65.9247 53.6585 65.4596 53.4847C65.4267 53.4706 65.3931 53.458 65.3586 53.4486C65.0642 53.3484 64.7557 53.2842 64.4385 53.2552L66.2599 51.4449L74.1891 51.5764ZM32.0527 81.585C28.5579 79.8021 25.208 76.4523 21.3297 72.5738C18.2328 69.4769 17.0974 64.983 17.954 59.2158C18.6078 54.8128 20.2404 51.3001 20.2561 51.2648C20.2615 51.2523 20.2678 51.2398 20.2725 51.2273C20.3492 51.0401 22.1604 46.6027 22.1604 43.2121C22.1604 41.8285 22.6021 40.5302 23.4031 39.557C24.165 38.6306 25.1595 38.1208 26.2017 38.1208C27.2447 38.1208 28.2384 38.6306 29.0011 39.557C29.8022 40.5303 30.2438 41.8286 30.2438 43.2121C30.2438 46.0123 28.7795 49.8367 28.5211 50.4898C28.3214 50.814 28.3614 51.2446 28.6425 51.5257C28.9713 51.8546 29.5046 51.8546 29.8335 51.5257L29.8507 51.5085C29.8523 51.507 29.8546 51.5046 29.8562 51.503L31.3166 50.0427L49.6303 32.3295C49.6334 32.3264 49.6373 32.3233 49.6405 32.3193C50.8597 31.1001 52.6662 30.8472 53.5863 31.7673L54.9613 33.1423C55.8814 34.0624 55.6285 35.869 54.4093 37.0881L39.6435 51.8539C39.479 52.0184 39.3968 52.2337 39.3968 52.4491C39.3968 52.6644 39.479 52.8797 39.6435 53.0442C39.9724 53.3731 40.5056 53.3731 40.8345 53.0442L59.2915 34.5871C60.5107 33.368 62.3173 33.115 63.2374 34.0351L64.6124 35.4101C65.5325 36.3302 65.2795 38.1368 64.0603 39.356L44.0387 59.3792C43.8743 59.5436 43.7921 59.759 43.7921 59.9743C43.7921 60.1897 43.8743 60.405 44.0387 60.5694C44.3676 60.8983 44.9009 60.8983 45.2297 60.5694L62.6971 43.1021C63.9163 41.8829 65.7236 41.6299 66.6429 42.55L68.018 43.925C68.938 44.8451 68.6851 46.6517 67.4675 47.8693L65.5091 49.8159C65.4034 49.859 65.3071 49.9232 65.2256 50.0062L61.8585 53.4436L60.9706 54.3261C60.767 54.4812 60.5712 54.6511 60.3841 54.8382L51.5051 63.7172C51.4738 63.7485 51.4464 63.7829 51.4206 63.8174L48.8757 66.3466C48.5461 66.6747 48.5445 67.2071 48.8718 67.5376C49.0363 67.7028 49.2524 67.7858 49.4693 67.7858C49.6838 67.7858 49.8984 67.7044 50.0628 67.5407L62.0763 55.601C62.5086 55.2893 62.9854 55.0756 63.4733 54.9785C63.507 54.9792 63.5398 54.9808 63.5735 54.9816C63.9267 54.9918 64.3205 55.0043 64.7747 55.0599L66.033 56.0872C66.6751 56.7481 66.9797 57.7128 66.8693 58.7417C66.7581 59.7785 66.2554 60.7902 65.4536 61.592L60.049 66.9966C60.049 66.9966 60.049 66.9974 60.0482 66.9974L51.6931 75.3525C51.5772 75.4684 51.5013 75.6117 51.4668 75.7644C49.8491 77.4699 46.5431 80.7187 43.941 81.7429C39.4221 83.5235 35.7559 83.475 32.0528 81.5855L32.0527 81.585ZM69.0574 79.1811V81.1262C69.0574 82.4221 67.6111 83.5185 65.8947 83.5263L46.3837 82.6407L45.982 82.607C48.6256 81.0668 51.4194 78.2791 52.8172 76.7921L66.522 76.8344C67.9495 77.0661 69.0574 78.0465 69.0574 79.1811L69.0574 79.1811ZM78.9911 72.7789C78.9911 74.0795 77.5346 75.1782 75.8112 75.179L66.6567 75.1508C66.403 75.1163 66.1422 75.0983 65.8768 75.0983H54.4263L61.09 68.4347H75.8105C77.5347 68.4347 78.9912 69.5333 78.9912 70.8348L78.9911 72.7789ZM82.6025 64.3502C82.6025 65.6508 81.1461 66.7503 79.4219 66.7503H62.7728L67.5345 61.9886C68.1257 61.3974 68.5571 60.7138 68.8218 60.0059H79.4218C81.1461 60.0059 82.6025 61.1053 82.6025 62.406L82.6025 64.3502Z"
            fill="#4D7DD9"
          />
          <path
            d="M56.5731 23.5513C56.5998 23.5537 56.6272 23.5552 56.6538 23.5552C57.0829 23.5552 57.4494 23.2287 57.4909 22.7925L58.1416 15.9214C58.1854 15.4586 57.8456 15.0475 57.3828 15.0037C56.9208 14.9606 56.5089 15.2997 56.4651 15.7625L55.8144 22.6336C55.7705 23.0971 56.1096 23.5075 56.5731 23.5513L56.5731 23.5513Z"
            fill="#4D7DD9"
          />
          <path
            d="M43.898 25.4035C44.0397 25.7128 44.3451 25.8952 44.6638 25.8952C44.7812 25.8952 44.9003 25.8709 45.0138 25.8185C45.4367 25.6251 45.6222 25.1255 45.4288 24.7026L42.5566 18.4265C42.3632 18.0036 41.8637 17.818 41.4408 18.0115C41.018 18.2049 40.8324 18.7045 41.0258 19.1273L43.898 25.4035Z"
            fill="#4D7DD9"
          />
          <path
            d="M29.3377 29.7594L34.963 33.7584C35.111 33.8633 35.2817 33.9142 35.45 33.9142C35.7131 33.9142 35.9731 33.7913 36.1368 33.5603C36.4062 33.1813 36.3177 32.6559 35.9387 32.3865L30.3134 28.3875C29.9344 28.1182 29.409 28.2067 29.1396 28.5857C28.8695 28.9646 28.9587 29.4901 29.3377 29.7594V29.7594Z"
            fill="#4D7DD9"
          />
          <path
            d="M76.2255 36.7356C76.343 36.7356 76.462 36.7113 76.5756 36.6588L82.8517 33.7867C83.2746 33.5932 83.4602 33.0937 83.2667 32.6708C83.0733 32.248 82.5737 32.0616 82.1509 32.2558L75.8747 35.128C75.4519 35.3214 75.2655 35.821 75.4597 36.2438C75.6007 36.5531 75.9061 36.7356 76.2255 36.7356Z"
            fill="#4D7DD9"
          />
          <path
            d="M67.7161 27.3661C67.8641 27.471 68.0348 27.5219 68.2031 27.5219C68.4662 27.5219 68.7262 27.399 68.8899 27.168L72.8896 21.5427C73.159 21.1637 73.0705 20.6383 72.6915 20.3689C72.3125 20.0996 71.7871 20.188 71.5177 20.567L67.518 26.1923C67.2486 26.5713 67.3379 27.0967 67.7161 27.3661V27.3661Z"
            fill="#4D7DD9"
          />
        </svg>
      </div>
      <h2 className="main-title">{t("testSuccess")}</h2>
      <button
        className="btn"
        onClick={() => {
          window.location.href = "/";
        }}
      >
        {t("redirectToMain")}
      </button>
    </div>
  );
};
