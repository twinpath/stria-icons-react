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
var Fan_exports = {};
__export(Fan_exports, {
  default: () => Fan_default
});
module.exports = __toCommonJS(Fan_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FanRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M255.999 223.994C238.378 223.994 224.007 238.369 224.007 255.994S238.378 287.994 255.999 287.994S287.991 273.619 287.991 255.994S273.62 223.994 255.999 223.994ZM511.689 265.119V264.994C500.943 180.117 428.708 115.99 343.48 115.99C329.232 115.99 315.111 117.115 300.99 119.615L308.738 42.488C309.863 30.738 305.613 19.113 297.115 10.863S276.745 -1.262 265.122 0.363C180.142 10.988 116.032 83.24 116.032 168.492C116.032 182.742 117.157 196.992 119.656 210.992L42.548 203.242C30.927 201.992 19.304 206.242 11.181 214.617C2.808 223.119 -1.19 235.119 0.31 246.869C11.056 331.871 83.29 395.996 168.519 395.996C182.767 395.996 196.888 394.871 211.009 392.371L203.261 469.498C202.011 481.123 206.261 492.75 214.634 500.875C222.007 508 231.755 512 242.003 512C243.626 512 245.376 511.875 247.001 511.75C331.857 501 395.966 428.748 395.966 343.496C395.966 329.246 394.841 315.121 392.343 300.994L469.449 308.869C481.072 309.994 492.695 305.744 500.818 297.369C509.191 288.869 513.189 276.994 511.689 265.119ZM350.052 248.551C338.325 247.367 329.386 258.838 333.402 269.92L337.73 281.869C344.478 300.494 347.978 321.246 347.978 343.496C347.978 400.748 307.488 449.998 252.124 462.123L263.441 350.068C264.624 338.34 253.152 329.402 242.07 333.418L230.13 337.746C211.509 344.621 190.765 347.996 168.519 347.996C111.282 347.996 62.169 307.494 49.923 252.119L161.947 263.436C173.673 264.621 182.613 253.148 178.597 242.066L174.269 230.119C167.521 211.492 164.021 190.742 164.021 168.492C164.021 111.24 204.511 62.115 259.874 49.865L248.558 161.918C247.374 173.646 258.847 182.586 269.929 178.568L281.868 174.242C300.49 167.492 321.234 163.992 343.48 163.992C400.716 163.992 449.954 204.492 462.075 259.869L350.052 248.551Z" })
  }
));
FanRegular.displayName = "FanRegular";
var Fan_default = FanRegular;
