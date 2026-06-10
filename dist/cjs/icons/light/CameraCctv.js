var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var CameraCctv_exports = {};
__export(CameraCctv_exports, {
  default: () => CameraCctv_default
});
module.exports = __toCommonJS(CameraCctv_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CameraCctvLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M525.225 193.74C523.986 177.15 513.053 162.404 496.748 155.971L150.258 3.617C143.947 1.076 138.414 0 132.811 0C113.688 0 99.742 12.271 93.609 22.779L6.082 176.121C-0.492 187.547 -1.678 201.996 2.961 214.678C7.537 227.189 17.129 236.641 29.971 241.295L188.643 306.979L148.875 416.029H32V368.045C32 359.248 24.801 352.051 16 352.051C7.201 352.051 0 359.248 0 368.045V496.004C0 504.801 7.201 512 16 512C24.801 512 32 504.801 32 496.004V448.02H160C166.625 448.02 172.625 443.896 175 437.648L218.232 319.229L290.135 348.992C294.525 350.814 300.365 352.064 306.342 352.064C315.121 352.064 323.65 349.521 331.012 344.711L504.199 236.604C518.992 227.041 526.881 210.723 525.225 193.74ZM487.25 209.471L313.5 317.936C311.074 319.521 306.924 320.951 302.375 319.436L40.875 211.221C30.875 207.596 31 196.975 33.875 191.977L121.25 38.898C122.77 36.295 128.982 29.545 137.375 32.9L485 185.729C495.453 189.854 496.213 203.672 487.25 209.471ZM566.604 274.938L518.693 253.25C510.594 249.562 501.15 253.188 497.49 261.219C493.848 269.25 497.412 278.75 505.465 282.375L538.848 297.5L510.109 361.594L422.453 323.031C414.322 319.531 404.91 323.156 401.359 331.25C397.795 339.344 401.471 348.781 409.568 352.344L511.768 397.281C513.861 398.187 516.051 398.625 518.193 398.625C524.322 398.625 530.154 395.094 532.812 389.156L574.592 296.031C578.205 288 574.623 278.562 566.604 274.938Z" })
  }
));
CameraCctvLight.displayName = "CameraCctvLight";
var CameraCctv_default = CameraCctvLight;
