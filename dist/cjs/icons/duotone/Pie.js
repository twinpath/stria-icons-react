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
var Pie_exports = {};
__export(Pie_exports, {
  default: () => Pie_default
});
module.exports = __toCommonJS(Pie_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PieDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M528.055 302.383L486.777 426.125C482.527 439.125 470.277 448 456.527 448H118.652C104.777 448 92.652 439.125 88.277 426.125L47 302.383C69.32 298.879 83.664 288.902 93.402 281.625C102.527 274.75 106.277 272 117.027 272C127.652 272 131.402 274.75 140.527 281.625C152.402 290.5 170.402 304 202.402 304S252.402 290.5 264.277 281.625C273.277 274.75 277.152 272 287.777 272S302.152 274.75 311.152 281.625C323.152 290.5 341.027 304 373.027 304S423.027 290.5 434.902 281.625C443.902 274.75 447.652 272 458.402 272C469.027 272 472.652 274.75 481.777 281.625C491.412 288.902 505.738 298.881 528.055 302.383Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M544 240C537.5 240 533.625 238.75 529.5 236.5C494.875 136.125 400.125 64 288 64S81 136.25 46.5 236.5C42.375 238.875 38.5 240 32 240C14.375 240 0 254.375 0 272S14.375 304 32 304C64 304 82 290.5 93.875 281.625C103 274.75 106.75 272 117.5 272C128.125 272 131.875 274.75 141 281.625C152.875 290.5 170.875 304 202.875 304S252.875 290.5 264.75 281.625C273.75 274.75 277.625 272 288.25 272S302.625 274.75 311.625 281.625C323.625 290.5 341.5 304 373.5 304S423.5 290.5 435.375 281.625C444.375 274.75 448.125 272 458.875 272C469.5 272 473.125 274.75 482.25 281.625C494 290.5 512 304 544 304C561.625 304 576 289.625 576 272S561.625 240 544 240ZM206.25 151.125L190.25 183.125C180.875 202.001 152.125 188 161.75 168.875L177.75 136.875C187.25 118.001 215.75 132.25 206.25 151.125ZM304 176C304 197.125 272 197.125 272 176V144C272 122.875 304 122.875 304 144V176ZM385.75 183.125L369.75 151.125C360.25 132.25 388.875 118.001 398.25 136.875L414.25 168.875C423.875 187.875 395.125 202.001 385.75 183.125Z" })
    ]
  }
));
PieDuotone.displayName = "PieDuotone";
var Pie_default = PieDuotone;
