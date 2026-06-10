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
var Phone_exports = {};
__export(Phone_exports, {
  default: () => Phone_default
});
module.exports = __toCommonJS(Phone_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PhoneRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M480.298 320.251L382.098 278.173C360.692 268.892 335.459 275.064 320.897 293.126L293.46 326.626C248.68 300.876 211.166 263.376 185.416 218.627L218.962 191.143C236.868 176.518 243.055 151.44 233.977 130.096L191.729 31.534C181.573 8.331 156.386 -4.325 131.855 1.347L40.608 22.409C16.703 27.862 0 48.831 0 73.393C0 315.251 196.744 512 438.581 512C463.142 512 484.111 495.313 489.579 471.469L510.641 380.126C516.36 355.47 503.61 330.314 480.298 320.251ZM463.877 369.313L442.799 460.719C442.331 462.719 440.69 464 438.581 464C223.212 464 47.999 288.783 47.999 73.393C47.999 71.3 49.295 69.659 51.342 69.19L142.683 48.112C142.996 48.034 143.324 48.003 143.636 48.003C145.371 48.003 146.996 49.05 147.683 50.612L189.822 148.94C190.572 150.705 190.072 152.768 188.573 154.002L139.793 193.971C131.168 201.033 128.543 213.111 133.449 223.111C166.464 290.345 221.712 345.563 288.991 378.594C298.991 383.501 311.085 380.876 318.147 372.251L358.161 323.376C359.271 321.97 361.349 321.439 363.083 322.251L461.346 364.345C463.221 365.157 464.346 367.345 463.892 369.313H463.877Z" })
  }
));
PhoneRegular.displayName = "PhoneRegular";
var Phone_default = PhoneRegular;
