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
var Paw_exports = {};
__export(Paw_exports, {
  default: () => Paw_default
});
module.exports = __toCommonJS(Paw_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PawRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M74.889 286.75C104.012 279.75 119.136 246.001 108.762 211.375C99.637 181 73.889 160 48.016 160C44.392 160 40.767 160.375 37.142 161.25C8.019 168.25 -7.104 202.001 3.27 236.625C12.394 267 38.142 288 64.015 288C67.64 288 71.264 287.625 74.889 286.75ZM318.495 190.625C322.12 191.5 325.745 192 329.369 192C357.117 192 385.49 165.125 395.989 126.75C407.863 83.375 392.364 41.5 361.492 33.375C357.867 32.5 354.242 32 350.618 32C322.87 32 294.497 58.75 283.998 97.25C272.124 140.625 287.623 182.5 318.495 190.625ZM474.858 161.25C471.233 160.375 467.608 160 463.984 160C438.111 160 412.363 181 403.238 211.375C392.864 246.001 407.988 279.75 437.111 286.75C440.736 287.625 444.36 288 447.985 288C473.858 288 499.606 267 508.73 236.625C519.104 202.001 503.981 168.25 474.858 161.25ZM182.631 192C186.255 192 189.88 191.5 193.505 190.625C224.378 182.5 239.876 140.625 228.002 97.25C217.503 58.875 189.13 32 161.382 32C157.758 32 154.133 32.5 150.508 33.375C119.636 41.5 104.137 83.375 116.011 126.75C126.51 165.125 154.883 192 182.631 192ZM256 224C176.631 224 64.015 346.75 64.015 424.25C64.015 459.125 90.763 480 135.759 480C184.631 480 216.878 454.875 256 454.875C295.497 454.875 327.869 480 376.241 480C421.237 480 447.985 459.125 447.985 424.25C447.985 346.75 335.369 224 256 224ZM399.739 427.125C398.864 428.125 392.114 432 376.241 432C358.492 432 342.993 426.875 324.87 420.875C304.996 414.375 282.498 406.875 256 406.875C229.752 406.875 207.379 414.375 187.63 420.875C169.507 426.875 153.758 432 135.759 432C119.886 432 113.136 428.125 112.386 427.375C112.261 427.125 112.011 426.125 112.011 424.25C112.011 370.125 204.879 272 256 272S399.989 370.125 399.989 424.25C399.989 426.125 399.739 427.125 399.739 427.125Z" })
  }
));
PawRegular.displayName = "PawRegular";
var Paw_default = PawRegular;
