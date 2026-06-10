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
var BellOn_exports = {};
__export(BellOn_exports, {
  default: () => BellOn_default
});
module.exports = __toCommonJS(BellOn_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BellOnRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M521 102.577C525.125 102.577 529.25 101.455 533 99.334L588.375 67.396C599.625 60.659 603.25 46.188 596.75 34.959C590.25 23.607 575.75 19.614 564.375 25.977L509 57.915C499.5 63.279 495 74.382 497.75 84.862C500.625 95.342 510.125 102.577 521 102.577ZM112 194.398C112 181.174 101.25 170.445 88 170.445H24C10.75 170.445 0 181.174 0 194.398S10.75 218.351 24 218.351H88C101.25 218.351 112 207.622 112 194.398ZM51.625 67.396L107.125 99.334C114.5 103.825 123.75 103.95 131.375 99.708C138.875 95.342 143.5 87.357 143.5 78.749C143.375 70.016 138.625 62.032 131.125 57.915L75.625 25.977C68.25 21.486 59 21.361 51.375 25.603C43.875 29.969 39.25 37.954 39.25 46.562C39.375 55.295 44.125 63.279 51.625 67.396ZM616 170.445H552C538.75 170.445 528 181.174 528 194.398S538.75 218.351 552 218.351H616C629.25 218.351 640 207.622 640 194.398S629.25 170.445 616 170.445ZM479.875 210.367C479.875 132.768 425.5 70.765 352 55.544V34.71C352.375 23.108 346.25 12.129 336.25 6.266C326.25 0.277 313.75 0.277 303.75 6.266C293.625 12.129 287.625 23.108 288 34.71V55.544C214.5 70.765 160.125 132.768 160.125 210.367C160.125 312.418 124 343.607 104.625 364.316C99 370.18 96 377.915 96 386.024C96.125 402.367 109 417.961 128.125 417.961H511.875C531 417.961 543.875 402.367 544 386.024C544 377.915 541 370.18 535.375 364.316C516 343.607 479.875 312.418 479.875 210.367ZM163.5 370.055C184.75 342.11 208 295.825 208 210.991C208 210.741 208 210.616 208 210.367C208 148.612 258.125 98.585 320 98.585S432 148.612 432 210.367C432 210.616 432 210.741 432 210.991C432 295.95 455.25 342.11 476.5 370.055H163.5ZM320 513.774C355.375 513.774 384 485.205 384 449.899H256C256 485.205 284.625 513.774 320 513.774Z" })
  }
));
BellOnRegular.displayName = "BellOnRegular";
var BellOn_default = BellOnRegular;
