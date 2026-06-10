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
var CommentDots_exports = {};
__export(CommentDots_exports, {
  default: () => CommentDots_default
});
module.exports = __toCommonJS(CommentDots_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CommentDotsRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M144.049 208C126.301 208 112.053 222.25 112.053 240S126.301 272 144.049 272S176.045 257.75 176.045 240S161.797 208 144.049 208ZM256.034 208C238.286 208 224.038 222.25 224.038 240S238.286 272 256.034 272C273.782 272 288.03 257.75 288.03 240S273.782 208 256.034 208ZM368.019 208C350.271 208 336.023 222.25 336.023 240S350.271 272 368.019 272C385.767 272 400.015 257.75 400.015 240S385.767 208 368.019 208ZM256.034 32C114.678 32 0.068 125.125 0.068 240C0.068 287.625 19.94 331.25 52.936 366.25C38.063 405.75 7.067 439.125 6.567 439.5C-0.057 446.5 -1.807 456.75 1.943 465.5C5.817 474.25 14.441 480 24.065 480C85.557 480 134.05 454.25 163.171 433.75C192.043 442.75 223.288 448 256.034 448C397.39 448 512 354.875 512 240S397.39 32 256.034 32ZM256.034 400C229.288 400 202.916 395.875 177.669 387.875L154.923 380.75L135.425 394.5C121.177 404.625 101.555 415.875 77.933 423.5C85.307 411.375 92.306 397.75 97.805 383.25L108.429 355.25L87.806 333.375C69.809 314.125 48.062 282.25 48.062 240C48.062 151.75 141.299 80 256.034 80S464.006 151.75 464.006 240S370.769 400 256.034 400Z" })
  }
));
CommentDotsRegular.displayName = "CommentDotsRegular";
var CommentDots_default = CommentDotsRegular;
