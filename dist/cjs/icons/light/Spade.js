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
var Spade_exports = {};
__export(Spade_exports, {
  default: () => Spade_default
});
module.exports = __toCommonJS(Spade_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SpadeLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M479.659 234.928L280.64 11.062C274.384 4.025 265.417 0 255.999 0C246.583 0 237.614 4.025 231.359 11.062L32.339 234.928C-14.63 287.762 -9.88 368.623 42.964 415.584C67.323 437.256 97.689 447.918 127.935 447.918C163.228 447.918 198.36 433.412 223.655 404.961L239.999 386.584V480H175.999C167.163 480 159.999 487.162 159.999 496C159.999 504.836 167.163 512 175.999 512H335.999C344.835 512 351.999 504.836 351.999 496C351.999 487.162 344.835 480 335.999 480H271.999V386.582L288.345 404.961C310.351 429.736 346.984 448 386.003 448C413.952 448 443.122 438.635 469.034 415.584C521.88 368.623 526.63 287.762 479.659 234.928ZM447.765 391.674C429.62 407.816 408.841 416 386.003 416C358.634 416 329.693 403.324 312.257 383.695C302.645 372.888 296.912 366.441 293.174 362.238C283.718 351.605 270.222 345.585 255.994 345.587H255.994C241.769 345.589 228.259 351.631 218.806 362.261C215.182 366.336 209.579 372.637 199.741 383.699C181.536 404.174 155.364 415.918 127.935 415.918C104.429 415.918 81.806 407.309 64.22 391.664C40.621 370.691 28.822 339.961 32.735 307.543C35.173 287.353 45.093 268.744 58.605 253.545L255.275 32.322C255.456 32.117 255.722 32 255.999 32L256.724 32.324L453.399 253.552C466.911 268.751 476.83 287.36 479.266 307.55C483.177 339.966 471.379 370.69 447.765 391.674Z" })
  }
));
SpadeLight.displayName = "SpadeLight";
var Spade_default = SpadeLight;
