
import React, { Component } from 'react'
import './style.css';



class PartFour extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="row row-rev">

                <div className="anim-text">
                    <h3>هزینه طراحی چقدر می شود؟</h3>
                    <p>با توجه به طبقه بندی های مختلف هزینه دریافتی برای سفارش های مختلف متفاوت می باشد. هر طبقه بندی دارای زیر مجموعه جدا می باشد که هزینه هر کدام در مقابل آن نوشته شده است.</p>
                </div>
                <div className="anim-photo">
                    <svg width="100%" height="100%" viewBox="0 0 1540 1199" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="cost">
                            <path id="Vector" d="M1356.83 1115.06C1356.71 1114.57 1345.86 1065.06 1368.03 1023.93C1390.19 982.812 1437.51 964.676 1437.98 964.497L1440.15 963.686L1440.66 965.94C1440.77 966.435 1451.62 1015.95 1429.46 1057.07C1407.29 1098.19 1359.97 1116.33 1359.5 1116.51L1357.33 1117.32L1356.83 1115.06ZM1437.18 969.188C1427.7 973.266 1390.3 991.116 1371.57 1025.85C1352.85 1060.58 1358.5 1101.66 1360.3 1111.82C1369.78 1107.75 1407.17 1089.92 1425.91 1055.16C1444.63 1020.42 1438.98 979.351 1437.18 969.188Z" fill="#3F3D56" />
                            <path id="Vector_2" d="M1412.52 1042.65C1372.69 1066.62 1357.34 1114.24 1357.34 1114.24C1357.34 1114.24 1406.59 1122.99 1446.42 1099.01C1486.25 1075.04 1501.59 1027.42 1501.59 1027.42C1501.59 1027.42 1452.35 1018.67 1412.52 1042.65Z" fill="#39B8B8" />
                            <g id="circle">
                                <path id="Vector_3" d="M547.056 898.387C542.319 898.387 537.534 898.311 532.837 898.165L532.944 894.752C539.688 894.962 546.571 895.021 553.347 894.927L553.393 898.343C551.284 898.372 549.172 898.386 547.056 898.387ZM573.938 897.594L573.738 894.185C580.492 893.786 587.333 893.226 594.071 892.52L594.427 895.916C587.638 896.628 580.745 897.194 573.938 897.594V897.594ZM512.311 897.062C505.5 896.54 498.617 895.856 491.853 895.026L492.27 891.636C498.983 892.459 505.812 893.139 512.571 893.656L512.311 897.062ZM614.817 893.306L614.305 889.93C621.016 888.911 627.778 887.728 634.399 886.412L635.065 889.762C628.392 891.088 621.579 892.28 614.817 893.306V893.306ZM471.513 892.057C464.785 890.916 457.993 889.605 451.327 888.157L452.051 884.818C458.666 886.256 465.406 887.557 472.083 888.688L471.513 892.057ZM655.132 885.29L654.312 881.974C660.899 880.345 667.524 878.543 674.001 876.622L674.971 879.898C668.444 881.834 661.77 883.649 655.132 885.29ZM431.343 883.332C424.743 881.575 418.102 879.644 411.603 877.587L412.631 874.332C419.081 876.372 425.672 878.288 432.22 880.029L431.343 883.332ZM694.541 873.594L693.42 870.369C699.812 868.145 706.242 865.742 712.532 863.223L713.799 866.396C707.462 868.933 700.983 871.354 694.541 873.594ZM392.097 870.919C385.687 868.562 379.237 866.019 372.928 863.36L374.253 860.211C380.514 862.85 386.914 865.373 393.276 867.713L392.097 870.919ZM732.663 858.335L731.25 855.226C737.389 852.435 743.559 849.456 749.59 846.372L751.144 849.414C745.066 852.522 738.849 855.522 732.663 858.335ZM769.197 839.652L767.507 836.687C773.394 833.326 779.271 829.793 784.972 826.185L786.796 829.071C781.052 832.707 775.131 836.268 769.197 839.652V839.652ZM803.896 817.692L801.942 814.893C807.485 811.019 813.017 806.961 818.384 802.834L820.465 805.543C815.058 809.701 809.483 813.789 803.896 817.692V817.692ZM283.461 812.882C277.95 808.877 272.445 804.682 267.097 800.411L269.227 797.742C274.534 801.98 279.998 806.143 285.467 810.116L283.461 812.882ZM836.466 792.65L834.266 790.038C839.433 785.676 844.574 781.131 849.551 776.528L851.869 779.036C846.855 783.675 841.673 788.255 836.466 792.65V792.65ZM251.321 787.209C246.188 782.712 241.088 778.035 236.165 773.307L238.529 770.842C243.416 775.535 248.476 780.177 253.57 784.64L251.321 787.209ZM866.64 764.73L864.209 762.332C868.972 757.503 873.684 752.506 878.211 747.481L880.748 749.766C876.186 754.831 871.44 759.865 866.64 764.73V764.73ZM221.661 758.733C216.952 753.779 212.301 748.658 207.837 743.514L210.417 741.276C214.846 746.381 219.461 751.462 224.135 756.377L221.661 758.733ZM894.162 734.172L891.524 732.004C895.827 726.765 900.064 721.359 904.121 715.933L906.855 717.978C902.768 723.446 898.498 728.895 894.162 734.172ZM194.723 727.687C190.494 722.342 186.33 716.823 182.346 711.283L185.117 709.288C189.071 714.784 193.203 720.262 197.401 725.569L194.723 727.687ZM918.796 701.219L915.972 699.301C919.78 693.692 923.51 687.919 927.056 682.14L929.967 683.928C926.391 689.75 922.633 695.568 918.796 701.219ZM170.733 694.337C167.013 688.631 163.371 682.76 159.909 676.882L162.85 675.148C166.286 680.98 169.9 686.808 173.593 692.469L170.733 694.337ZM940.334 666.137L937.346 664.486C940.624 658.552 943.809 652.457 946.815 646.371L949.876 647.885C946.848 654.017 943.637 660.158 940.334 666.137H940.334ZM958.57 629.209L955.442 627.838C958.163 621.622 960.775 615.256 963.208 608.917L966.396 610.142C963.945 616.53 961.311 622.945 958.57 629.209H958.57ZM132.394 621.839C129.777 615.554 127.27 609.124 124.944 602.726L128.154 601.559C130.461 607.908 132.949 614.288 135.546 620.525L132.394 621.839ZM973.335 590.727L970.094 589.653C972.225 583.23 974.236 576.665 976.07 570.138L979.358 571.062C977.509 577.639 975.481 584.255 973.335 590.727V590.727ZM118.367 583.241C116.335 576.731 114.426 570.081 112.693 563.473L115.996 562.606C117.715 569.164 119.61 575.764 121.626 582.224L118.367 583.241ZM984.464 551.14L981.138 550.366C982.667 543.783 984.064 537.06 985.293 530.386L988.651 531.003C987.414 537.73 986.005 544.504 984.464 551.14ZM107.938 543.465C106.514 536.793 105.225 529.996 104.108 523.259L107.476 522.699C108.585 529.386 109.864 536.131 111.277 542.751L107.938 543.465ZM991.906 510.7L988.521 510.236C989.44 503.546 990.215 496.724 990.827 489.959L994.228 490.266C993.611 497.084 992.829 503.958 991.906 510.7ZM101.208 502.901C100.403 496.139 99.742 489.252 99.2426 482.432L102.649 482.182C103.143 488.952 103.8 495.785 104.6 502.497L101.208 502.901ZM995.619 469.75L992.207 469.597C992.511 462.829 992.666 455.963 992.666 449.193H996.081C996.081 456.015 995.925 462.932 995.619 469.75ZM98.208 461.891C98.0913 457.703 98.0321 453.43 98.0312 449.193C98.0312 446.565 98.0538 443.941 98.0988 441.322L101.513 441.382C101.468 443.981 101.446 446.585 101.446 449.193C101.447 453.398 101.506 457.64 101.621 461.798L98.208 461.891ZM102.324 420.989L98.9158 420.776C99.3417 413.951 99.9303 407.057 100.663 400.286L104.058 400.654C103.33 407.374 102.747 414.215 102.324 420.989H102.324ZM990.461 400.15C989.779 393.415 988.841 390.132 987.851 383.427L991.229 382.928C992.226 389.684 993.081 394.841 993.77 401.626L990.461 400.15ZM106.716 380.42L103.342 379.898C104.388 373.141 105.603 366.33 106.955 359.652L110.301 360.329C108.96 366.956 107.754 373.715 106.716 380.42H106.716ZM984.404 363.314C983.102 356.651 981.633 349.943 980.036 343.378L983.354 342.571C984.963 349.186 986.444 355.945 987.756 362.659L984.404 363.314ZM114.804 340.425L111.492 339.594C113.15 332.979 114.987 326.308 116.951 319.766L120.221 320.749C118.272 327.24 116.45 333.86 114.804 340.425ZM974.754 323.664C972.85 317.16 970.769 310.618 968.57 304.216L971.798 303.105C974.016 309.556 976.113 316.15 978.032 322.703L974.754 323.664ZM126.559 301.29L123.338 300.157C125.607 293.7 128.057 287.211 130.62 280.873L133.786 282.153C131.242 288.443 128.811 294.882 126.559 301.29V301.29ZM961.494 285.073C959.003 278.787 956.335 272.478 953.564 266.321L956.679 264.918C959.472 271.123 962.159 277.48 964.669 283.814L961.494 285.073ZM141.885 263.378L138.782 261.951C141.634 255.738 144.669 249.508 147.804 243.433L150.838 244.999C147.727 251.028 144.715 257.211 141.885 263.378ZM944.783 247.945C941.727 241.915 938.489 235.872 935.159 229.986L938.13 228.304C941.486 234.235 944.748 240.323 947.827 246.401L944.783 247.945ZM160.626 227.058L157.667 225.353C161.073 219.436 164.665 213.513 168.344 207.751L171.222 209.589C167.571 215.308 164.006 221.186 160.626 227.058ZM924.722 212.48C921.114 206.734 917.336 201.01 913.492 195.465L916.297 193.519C920.17 199.106 923.978 204.873 927.613 210.664L924.722 212.48ZM182.604 192.627L179.813 190.659C183.75 185.074 187.866 179.507 192.049 174.113L194.747 176.207C190.596 181.561 186.51 187.085 182.604 192.627ZM901.495 178.977C897.38 173.585 893.095 168.226 888.755 163.047L891.372 160.852C895.744 166.071 900.062 171.471 904.209 176.904L901.495 178.977ZM207.622 160.362L205.023 158.147C209.44 152.957 214.045 147.79 218.707 142.791L221.203 145.121C216.577 150.083 212.007 155.211 207.622 160.362ZM875.303 147.709C870.716 142.715 865.958 137.764 861.162 132.997L863.57 130.574C868.402 135.378 873.195 140.365 877.817 145.397L875.303 147.709ZM235.46 130.52L233.072 128.078C237.955 123.3 243.007 118.575 248.089 114.037L250.363 116.586C245.32 121.089 240.306 125.778 235.46 130.52V130.52ZM846.368 118.941C841.341 114.38 836.151 109.881 830.942 105.571L833.12 102.939C838.367 107.282 843.597 111.815 848.663 116.411L846.368 118.941ZM265.881 103.344L263.725 100.695C269.006 96.3929 274.464 92.1497 279.948 88.0833L281.982 90.827C276.539 94.8634 271.122 99.0741 265.881 103.344H265.881ZM298.631 79.0614L296.725 76.2276C302.378 72.4231 308.196 68.6977 314.021 65.1525L315.795 68.0714C310.016 71.5891 304.241 75.2869 298.631 79.0614H298.631ZM333.439 57.8804L331.8 54.8831C337.78 51.6098 343.912 48.4341 350.024 45.4426L351.525 48.5116C345.459 51.4797 339.374 54.6313 333.439 57.8804ZM745.535 49.9661C739.459 46.9379 733.235 44.0124 727.036 41.2711L728.417 38.1471C734.664 40.9092 740.936 43.8573 747.059 46.9087L745.535 49.9661ZM370.013 39.9844L368.656 36.8503C374.905 34.1407 381.298 31.5421 387.655 29.1261L388.867 32.3202C382.558 34.717 376.215 37.2956 370.013 39.9844ZM708.151 33.4352C701.828 30.9826 695.358 28.6424 688.917 26.4808L690.004 23.2417C696.493 25.4208 703.014 27.7784 709.385 30.2511L708.151 33.4352ZM408.101 25.5159L407.038 22.2701C413.527 20.1418 420.148 18.1378 426.715 16.3156L427.628 19.6064C421.11 21.4153 414.54 23.4035 408.101 25.5159H408.101ZM669.429 20.437C662.917 18.5798 656.274 16.8502 649.687 15.2965L650.471 11.9723C657.11 13.5377 663.802 15.2806 670.366 17.1512L669.429 20.437ZM447.407 14.6035L446.647 11.2734C453.299 9.75312 460.076 8.3679 466.788 7.15699L467.395 10.5179C460.733 11.7204 454.009 13.0948 447.407 14.6035ZM629.727 11.0733C623.078 9.82477 616.306 8.71401 609.596 7.77162L610.07 4.38905C616.831 5.33895 623.657 6.45813 630.358 7.71575L629.727 11.0733ZM487.55 7.35631L487.098 3.97041C493.857 3.06806 500.732 2.30916 507.529 1.71704L507.826 5.11962C501.08 5.70838 494.259 6.46055 487.55 7.35631ZM589.334 5.39649C582.608 4.76267 575.762 4.27397 568.984 3.94623L569.151 0.533646C575.979 0.864734 582.876 1.35677 589.654 1.99566L589.334 5.39649ZM528.187 3.80946L528.044 0.396954C534.319 0.13509 540.715 0.0016738 547.056 0L548.602 0.00248886L548.592 3.41841L547.056 3.41592C540.764 3.41751 534.414 3.55009 528.187 3.80946V3.80946Z" fill="#3F3D56" />
                            </g>
                            <path id="Vector_4" d="M1540 1114.09H288.535V1117.5H1540V1114.09Z" fill="#3F3D56" />
                            <path id="Vector_5" d="M1020.99 539.758L1038.07 804.492C1038.07 804.492 1079.04 908.678 1077.33 1007.74C1077.33 1007.74 1061.97 1047.02 1073.92 1053.85C1085.87 1060.69 1092.7 1065.81 1085.87 1070.93C1079.04 1076.06 1073.92 1088.01 1079.04 1091.43C1084.16 1094.85 1085.87 1099.97 1084.16 1099.97H1032.94C1032.94 1099.97 1043.19 1074.35 1027.82 1067.52C1012.46 1060.69 1020.99 1043.61 1020.99 1043.61L906.603 708.846L816.115 1016.28C816.115 1016.28 831.481 1026.53 819.53 1031.65C807.579 1036.77 802.457 1026.53 807.579 1036.77C812.701 1047.02 805.871 1052.15 805.871 1053.85C805.871 1055.56 754.652 1048.73 754.652 1048.73C754.652 1048.73 780.262 1026.53 768.31 1021.4C756.359 1016.28 751.237 1011.16 754.652 1007.74C758.066 1004.32 771.725 971.872 771.725 971.872C771.725 971.872 778.554 848.899 780.262 843.775C781.969 838.651 780.262 814.74 780.262 802.784C780.262 790.828 778.554 743.006 783.676 731.05C788.798 719.094 793.92 572.21 821.237 555.13C848.554 538.05 1020.99 539.758 1020.99 539.758Z" fill="#2F2E41" />
                            <path id="Vector_6" d="M804.166 1045.31C804.166 1045.31 838.312 1115.34 814.41 1123.88C790.507 1132.42 759.775 1125.59 752.946 1135.84C746.117 1146.08 670.995 1158.04 669.288 1132.42C667.58 1106.8 751.239 1058.98 751.239 1058.98L762.136 1041.42L804.166 1045.31Z" fill="#2F2E41" />
                            <path id="Vector_7" d="M1080.75 1096.55C1080.75 1096.55 1114.9 1166.58 1091 1175.12C1067.09 1183.66 1036.36 1176.83 1029.53 1187.07C1022.7 1197.32 947.581 1209.28 945.873 1183.66C944.166 1158.04 1027.82 1110.22 1027.82 1110.22L1038.72 1092.66L1080.75 1096.55Z" fill="#2F2E41" />
                            <path id="Vector_8" d="M922.826 217.808C953.943 217.808 979.167 192.574 979.167 161.446C979.167 130.317 953.943 105.083 922.826 105.083C891.709 105.083 866.484 130.317 866.484 161.446C866.484 192.574 891.709 217.808 922.826 217.808Z" fill="#A0616A" />
                            <path id="Vector_9" d="M961.239 191.334L954.409 240.865L903.19 280.148L889.531 261.36V196.458L961.239 191.334Z" fill="#A0616A" />
                            <path id="Vector_10" d="M880.996 254.529C880.996 254.529 933.922 259.653 961.24 240.865L1015.87 563.67C1015.87 563.67 822.947 579.041 814.41 568.793V468.024L848.557 304.06L880.996 254.529Z" fill="#39B8B8" />
                            <path id="Vector_11" d="M956.536 225.432L974.896 240.865C974.896 240.865 1050.02 252.821 1044.9 273.316L1024.41 515.847L1031.24 597.829C1031.24 597.829 973.188 582.457 928.798 597.829C884.408 613.2 919.675 267.504 919.675 267.504C919.675 267.504 960.371 230.494 956.536 225.432Z" fill="#D0CDE1" />
                            <path id="Vector_12" d="M889.531 244.127C889.531 244.127 834.897 283.565 828.067 309.184C821.238 334.803 799.043 604.661 799.043 604.661C799.043 604.661 809.287 599.537 814.409 608.077C819.531 616.617 898.067 257.636 889.531 244.127Z" fill="#D0CDE1" />
                            <path id="Vector_13" d="M866.509 158.99C866.509 158.99 860.41 149.837 862.756 139.981C864.157 134.385 864.711 128.61 864.398 122.85C864.398 122.85 869.324 106.891 874.251 97.9738C879.177 89.056 876.831 85.3012 892.314 82.4851C907.797 79.6689 901.463 59.4867 942.282 81.3117C943.659 83.2352 945.575 84.7075 947.787 85.5428C950 86.3782 952.411 86.539 954.715 86.0052C963.16 84.3624 966.21 96.0963 966.21 96.0963C966.21 96.0963 971.84 92.8108 973.951 97.5043C976.062 102.198 991.116 94.6874 991.116 126.369C991.116 158.05 973.985 186.35 973.985 186.35C973.985 186.35 975.241 133.058 947.325 127.66C919.409 122.263 889.382 106.539 882.109 126.722C878.184 138.049 872.948 148.879 866.509 158.99V158.99Z" fill="#2F2E41" />
                            <path id="Vector_14" d="M974.596 171.66C977.637 171.66 980.103 168.372 980.103 164.315C980.103 160.259 977.637 156.971 974.596 156.971C971.555 156.971 969.09 160.259 969.09 164.315C969.09 168.372 971.555 171.66 974.596 171.66Z" fill="#A0616A" />
                            <path id="Vector_15" d="M743.195 692.492C729.685 684.365 713.396 684.985 707.203 685.606C709.561 691.366 716.637 706.057 730.147 714.189C743.69 722.336 759.958 721.697 766.141 721.081C763.784 715.323 756.707 700.625 743.195 692.492Z" fill="#D0CDE1" />
                            <path id="Vector_16" d="M806.677 853.764H722.24C717.202 853.764 712.369 855.766 708.807 859.33C705.244 862.894 703.242 867.729 703.242 872.769C703.242 877.81 705.244 882.644 708.807 886.208C712.369 889.772 717.202 891.775 722.24 891.775H806.677C811.713 891.77 816.541 889.765 820.1 886.202C823.659 882.638 825.658 877.807 825.658 872.769C825.658 867.732 823.659 862.9 820.1 859.337C816.541 855.773 811.713 853.768 806.677 853.764Z" fill="#D0CDE1" />
                            <path id="Vector_17" d="M1189.04 653.15H715.627C710.12 653.15 704.667 654.235 699.579 656.344C694.491 658.452 689.868 661.542 685.974 665.438C682.08 669.333 678.991 673.958 676.884 679.048C674.776 684.138 673.691 689.593 673.691 695.102V925.845C673.691 936.971 678.11 947.642 685.974 955.509C693.839 963.376 704.505 967.796 715.627 967.796H1189.04C1194.55 967.796 1200 966.711 1205.09 964.603C1210.18 962.495 1214.8 959.405 1218.69 955.509C1222.59 951.613 1225.68 946.989 1227.78 941.899C1229.89 936.809 1230.98 931.354 1230.98 925.845V695.102C1230.98 689.593 1229.89 684.138 1227.78 679.048C1225.68 673.958 1222.59 669.333 1218.69 665.438C1214.8 661.542 1210.18 658.452 1205.09 656.344C1200 654.236 1194.55 653.15 1189.04 653.15ZM703.914 681.768C704.849 681.599 727.017 677.825 745.373 688.874C763.728 699.922 770.78 721.284 771.071 722.188L771.813 724.491L769.431 724.914C766.033 725.444 762.597 725.697 759.158 725.669C750.822 725.669 738.741 724.289 727.971 717.805C709.616 706.76 702.565 685.397 702.274 684.494L701.532 682.191L703.914 681.768ZM806.68 895.998H722.243C716.084 895.998 710.178 893.551 705.824 889.194C701.469 884.838 699.023 878.93 699.023 872.769C699.023 866.608 701.469 860.7 705.824 856.344C710.178 851.987 716.084 849.54 722.243 849.54H806.68C812.838 849.54 818.744 851.987 823.099 856.344C827.454 860.7 829.9 866.608 829.9 872.769C829.9 878.93 827.454 884.838 823.099 889.194C818.744 893.551 812.838 895.998 806.68 895.998ZM1190.87 891.775C1190.85 898.489 1188.17 904.923 1183.43 909.671C1178.68 914.419 1172.25 917.096 1165.54 917.115H1102.21C1095.5 917.096 1089.07 914.419 1084.32 909.671C1079.57 904.923 1076.9 898.489 1076.88 891.775V853.764C1076.9 847.049 1079.57 840.615 1084.32 835.867C1089.07 831.119 1095.5 828.443 1102.21 828.423H1165.54C1172.25 828.443 1178.68 831.119 1183.43 835.867C1188.17 840.615 1190.85 847.049 1190.87 853.764L1190.87 891.775Z" fill="#D0CDE1" />
                            <path id="Vector_18" d="M1122.26 884.384H1094.82C1092.86 884.384 1090.98 885.163 1089.6 886.549C1088.21 887.935 1087.43 889.815 1087.43 891.775C1087.43 893.735 1088.21 895.615 1089.6 897.001C1090.98 898.387 1092.86 899.166 1094.82 899.166H1122.26C1124.22 899.166 1126.1 898.387 1127.49 897.001C1128.87 895.615 1129.65 893.735 1129.65 891.775C1129.65 889.815 1128.87 887.935 1127.49 886.549C1126.1 885.163 1124.22 884.384 1122.26 884.384V884.384ZM1122.26 894.942H1094.82C1094.41 894.943 1093.99 894.862 1093.61 894.703C1093.22 894.545 1092.87 894.311 1092.58 894.017C1092.28 893.723 1092.05 893.373 1091.89 892.989C1091.73 892.604 1091.65 892.191 1091.65 891.775C1091.65 891.358 1091.73 890.946 1091.89 890.561C1092.05 890.176 1092.28 889.827 1092.58 889.532C1092.87 889.238 1093.22 889.005 1093.61 888.846C1093.99 888.688 1094.41 888.606 1094.82 888.607H1122.26C1122.68 888.606 1123.09 888.688 1123.48 888.846C1123.86 889.005 1124.21 889.238 1124.51 889.532C1124.8 889.827 1125.04 890.176 1125.2 890.561C1125.36 890.946 1125.44 891.358 1125.44 891.775C1125.44 892.191 1125.36 892.604 1125.2 892.989C1125.04 893.373 1124.8 893.723 1124.51 894.017C1124.21 894.311 1123.86 894.545 1123.48 894.703C1123.09 894.862 1122.68 894.943 1122.26 894.942V894.942Z" fill="#D0CDE1" />
                            <path id="Vector_19" d="M1172.93 884.384H1145.49C1144.51 884.382 1143.55 884.572 1142.65 884.943C1141.76 885.314 1140.94 885.858 1140.25 886.545C1139.57 887.231 1139.02 888.046 1138.65 888.944C1138.28 889.841 1138.09 890.803 1138.09 891.775C1138.09 892.746 1138.28 893.708 1138.65 894.606C1139.02 895.503 1139.57 896.318 1140.25 897.005C1140.94 897.691 1141.76 898.236 1142.65 898.606C1143.55 898.977 1144.51 899.167 1145.49 899.166H1172.93C1174.89 899.166 1176.77 898.387 1178.15 897.001C1179.54 895.615 1180.32 893.735 1180.32 891.775C1180.32 889.815 1179.54 887.935 1178.15 886.549C1176.77 885.163 1174.89 884.384 1172.93 884.384ZM1172.93 894.942H1145.49C1145.07 894.943 1144.66 894.862 1144.27 894.703C1143.89 894.545 1143.54 894.311 1143.24 894.017C1142.95 893.723 1142.71 893.373 1142.55 892.989C1142.39 892.604 1142.31 892.191 1142.31 891.775C1142.31 891.358 1142.39 890.946 1142.55 890.561C1142.71 890.176 1142.95 889.827 1143.24 889.532C1143.54 889.238 1143.89 889.005 1144.27 888.846C1144.66 888.688 1145.07 888.606 1145.49 888.607H1172.93C1173.77 888.609 1174.57 888.944 1175.16 889.538C1175.75 890.131 1176.09 890.936 1176.09 891.775C1176.09 892.614 1175.75 893.418 1175.16 894.012C1174.57 894.606 1173.77 894.94 1172.93 894.942V894.942Z" fill="#D0CDE1" />
                            <path id="Vector_20" d="M1122.26 865.378H1094.82C1092.86 865.378 1090.98 866.157 1089.6 867.543C1088.21 868.929 1087.43 870.809 1087.43 872.769C1087.43 874.729 1088.21 876.609 1089.6 877.995C1090.98 879.381 1092.86 880.16 1094.82 880.16H1122.26C1123.24 880.161 1124.2 879.971 1125.09 879.6C1125.99 879.23 1126.81 878.686 1127.5 877.999C1128.18 877.313 1128.73 876.497 1129.1 875.6C1129.47 874.703 1129.66 873.74 1129.66 872.769C1129.66 871.797 1129.47 870.835 1129.1 869.938C1128.73 869.04 1128.18 868.225 1127.5 867.539C1126.81 866.852 1125.99 866.308 1125.09 865.937C1124.2 865.567 1123.24 865.376 1122.26 865.378V865.378ZM1122.26 875.936H1094.82C1093.98 875.936 1093.18 875.603 1092.58 875.009C1091.99 874.415 1091.66 873.609 1091.66 872.769C1091.66 871.929 1091.99 871.123 1092.58 870.529C1093.18 869.935 1093.98 869.601 1094.82 869.601H1122.26C1123.1 869.601 1123.91 869.935 1124.5 870.529C1125.1 871.123 1125.43 871.929 1125.43 872.769C1125.43 873.609 1125.1 874.415 1124.5 875.009C1123.91 875.603 1123.1 875.936 1122.26 875.936V875.936Z" fill="#D0CDE1" />
                            <path id="Vector_21" d="M1172.93 865.378H1145.49C1144.51 865.376 1143.55 865.567 1142.65 865.937C1141.76 866.308 1140.94 866.852 1140.25 867.539C1139.57 868.225 1139.02 869.04 1138.65 869.938C1138.28 870.835 1138.09 871.797 1138.09 872.769C1138.09 873.74 1138.28 874.703 1138.65 875.6C1139.02 876.497 1139.57 877.313 1140.25 877.999C1140.94 878.686 1141.76 879.23 1142.65 879.6C1143.55 879.971 1144.51 880.161 1145.49 880.16H1172.93C1174.89 880.16 1176.77 879.381 1178.15 877.995C1179.54 876.609 1180.32 874.729 1180.32 872.769C1180.32 870.809 1179.54 868.929 1178.15 867.543C1176.77 866.157 1174.89 865.378 1172.93 865.378ZM1172.93 875.936H1145.49C1144.65 875.936 1143.84 875.603 1143.25 875.009C1142.65 874.415 1142.32 873.609 1142.32 872.769C1142.32 871.929 1142.65 871.123 1143.25 870.529C1143.84 869.935 1144.65 869.601 1145.49 869.601H1172.93C1173.77 869.601 1174.57 869.935 1175.17 870.529C1175.76 871.123 1176.09 871.929 1176.09 872.769C1176.09 873.609 1175.76 874.415 1175.17 875.009C1174.57 875.603 1173.77 875.936 1172.93 875.936Z" fill="#D0CDE1" />
                            <path id="Vector_22" d="M1122.26 846.372H1094.82C1092.86 846.372 1090.98 847.151 1089.6 848.537C1088.21 849.923 1087.43 851.803 1087.43 853.763C1087.43 855.723 1088.21 857.603 1089.6 858.989C1090.98 860.375 1092.86 861.154 1094.82 861.154H1122.26C1124.22 861.154 1126.1 860.375 1127.49 858.989C1128.87 857.603 1129.65 855.723 1129.65 853.763C1129.65 851.803 1128.87 849.923 1127.49 848.537C1126.1 847.151 1124.22 846.372 1122.26 846.372V846.372ZM1122.26 856.931H1094.82C1093.98 856.931 1093.18 856.597 1092.58 856.003C1091.99 855.409 1091.66 854.603 1091.66 853.763C1091.66 852.923 1091.99 852.117 1092.58 851.523C1093.18 850.929 1093.98 850.595 1094.82 850.595H1122.26C1123.1 850.595 1123.91 850.929 1124.5 851.523C1125.1 852.117 1125.43 852.923 1125.43 853.763C1125.43 854.603 1125.1 855.409 1124.5 856.003C1123.91 856.597 1123.1 856.931 1122.26 856.931V856.931Z" fill="#D0CDE1" />
                            <path id="Vector_23" d="M1172.93 846.372H1145.49C1144.51 846.371 1143.55 846.561 1142.65 846.931C1141.76 847.302 1140.94 847.846 1140.25 848.533C1139.57 849.219 1139.02 850.035 1138.65 850.932C1138.28 851.83 1138.09 852.792 1138.09 853.763C1138.09 854.735 1138.28 855.697 1138.65 856.594C1139.02 857.492 1139.57 858.307 1140.25 858.993C1140.94 859.68 1141.76 860.224 1142.65 860.595C1143.55 860.965 1144.51 861.156 1145.49 861.154H1172.93C1174.89 861.151 1176.76 860.371 1178.14 858.985C1179.53 857.6 1180.3 855.721 1180.3 853.763C1180.3 851.805 1179.53 849.927 1178.14 848.541C1176.76 847.155 1174.89 846.375 1172.93 846.372V846.372ZM1172.93 856.931H1145.49C1144.65 856.931 1143.84 856.597 1143.25 856.003C1142.65 855.409 1142.32 854.603 1142.32 853.763C1142.32 852.923 1142.65 852.117 1143.25 851.523C1143.84 850.929 1144.65 850.595 1145.49 850.595H1172.93C1173.77 850.595 1174.57 850.929 1175.17 851.523C1175.76 852.117 1176.09 852.923 1176.09 853.763C1176.09 854.603 1175.76 855.409 1175.17 856.003C1174.57 856.597 1173.77 856.931 1172.93 856.931Z" fill="#D0CDE1" />
                            <path id="Vector_24" d="M1039.77 601.245L1027.53 641.196C1027.53 641.196 1024.41 715.678 983.432 705.43C942.456 695.183 995.383 608.077 995.383 608.077L1007.33 589.289L1039.77 601.245Z" fill="#A0616A" />
                            <path id="Vector_25" d="M807.578 601.245L795.34 641.196C795.34 641.196 792.212 715.678 751.237 705.43C710.261 695.183 763.188 608.077 763.188 608.077L775.139 589.289L807.578 601.245Z" fill="#A0616A" />
                            <path id="Vector_26" d="M1031.24 261.361C1031.24 261.361 1058.55 254.529 1067.09 300.644C1075.63 346.759 1085.87 478.272 1085.87 478.272L1044.9 616.616C1044.9 616.616 1003.92 594.413 995.383 597.829L1027.63 477.724L1000.5 355.299C1000.5 355.299 1024.41 261.361 1031.24 261.361Z" fill="#D0CDE1" />
                            <path id="Vector_27" opacity="0.15" d="M991.52 357.635L1027.37 477.192L991.52 598.457L1012.01 477.192L991.52 357.635Z" fill="black" />
                            <path id="Vector_28" d="M828.069 355.299L766.605 597.829C766.605 597.829 799.027 608.533 810.978 617.073L828.069 355.299Z" fill="#D0CDE1" />
                            <path id="Vector_29" opacity="0.1" d="M1190.92 242.64C1198.38 250.57 1201.26 261.719 1204.47 272.2C1230.35 356.669 1294.12 424.611 1366.74 473.142C1397.49 493.699 1434.94 521.267 1428.21 558.124C1424.58 577.917 1408.69 592.488 1396.88 608.609C1372.11 642.366 1364.07 688.249 1375.88 728.66C1389.31 774.638 1426.85 817.541 1415.23 864.032C1408.06 892.649 1383.74 913.015 1360.35 930.52C1323.87 957.81 1286.22 983.375 1247.41 1007.21C1221.4 1023.19 1193.72 1038.74 1163.41 1040.77C1136.71 1042.56 1110.56 1033.67 1085.21 1024.91C1063.07 1017.24 1040.36 1009.27 1022.48 993.907C1010.81 983.879 1001.5 970.942 988.537 962.738C958.082 943.469 918.965 955.679 884.043 963.931C801.642 983.295 713.452 976.224 635.041 943.97C514.762 894.486 423.085 790.569 305.434 734.812C254.849 710.833 199.824 695.952 152.985 665.069C126.596 647.486 103.925 626.002 85.9738 601.586C50.5616 553.759 31.4117 492.78 36.9415 433.089C42.4712 373.398 73.4569 315.877 122.122 282.18C174.218 246.11 240.017 239.373 299.292 217.719C360.5 195.35 414.954 156.907 475.577 132.905C524.631 113.536 578.016 104.028 631.815 105.078C685.615 106.129 738.464 117.71 786.483 138.974C852.458 168.187 919.333 236.344 992.813 241.519C1045.17 245.097 1150.03 199.214 1190.92 242.64Z" fill="#39B8B8" />
                            <g id="dollar">
                                <path id="Vector_30" d="M183.302 964.8C277.595 964.8 354.034 888.332 354.034 794.004C354.034 699.676 277.595 623.208 183.302 623.208C89.0096 623.208 12.5703 699.676 12.5703 794.004C12.5703 888.332 89.0096 964.8 183.302 964.8Z" fill="#3F3D56" />
                                <path id="Vector_31" opacity="0.1" d="M183.298 940.888C264.39 940.888 330.127 875.126 330.127 794.004C330.127 712.882 264.39 647.119 183.298 647.119C102.206 647.119 36.4688 712.882 36.4688 794.004C36.4688 875.126 102.206 940.888 183.298 940.888Z" fill="black" />
                                <path id="Vector_32" d="M176.263 880.679V859.3C165.46 859.089 154.284 855.278 147.766 849.986L152.235 835.805C159.982 841.612 169.377 844.8 179.056 844.906C192.281 844.906 201.221 836.228 201.221 824.163C201.221 812.521 193.957 805.324 180.174 798.974C161.176 790.507 149.442 780.77 149.442 762.355C149.442 744.786 160.431 731.451 177.567 728.276V706.897H189.114V727.43C197.725 727.547 206.124 730.117 213.328 734.838L208.671 748.808C201.762 744.077 193.575 741.567 185.203 741.611C170.862 741.611 165.46 751.348 165.46 759.815C165.46 770.822 172.351 776.325 188.556 783.946C207.74 792.836 217.426 803.842 217.426 822.681C217.426 839.402 207.181 855.067 187.997 858.664V880.679H176.263Z" fill="#39B8B8" />
                            </g>
                            <path id="Vector_33" d="M363.659 1141.42C243.106 1159.4 120.553 1159.4 0 1141.42V1100.42C120.681 1116.59 242.978 1116.59 363.659 1100.42V1141.42Z" fill="#3F3D56" />
                            <path id="Vector_34" d="M363.659 1078.22C243.106 1096.21 120.553 1096.21 0 1078.22V1037.23C120.681 1053.4 242.978 1053.4 363.659 1037.23V1078.22Z" fill="#3F3D56" />
                            <path id="Vector_35" d="M363.659 1015.03C243.106 1033.01 120.553 1033.01 0 1015.03V974.036C120.681 990.204 242.978 990.204 363.659 974.036V1015.03Z" fill="#3F3D56" />
                        </g>
                    </svg>

                </div>

            </div>
        );
    }
}

export default PartFour;