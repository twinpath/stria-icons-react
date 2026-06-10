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
var Gifts_exports = {};
__export(Gifts_exports, {
  default: () => Gifts_default
});
module.exports = __toCommonJS(Gifts_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GiftsSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M608 224.016H587.625C590.25 216.391 592 208.516 592 200.266C592 164.766 565 128.02 519.875 128.02C471.75 128.02 444 175.766 432 203.266C419.875 175.766 392.125 128.02 344.125 128.02C299 128.02 272 164.766 272 200.266C272 208.516 273.75 216.391 276.375 224.016H256C238.25 224.016 224 238.266 224 256.016V352.008H416V256H448V352.008H640V256.016C640 238.266 625.75 224.016 608 224.016ZM336 224.016C320.736 216.383 320 204.07 320 200.266C320 190.516 326.375 176.016 344.125 176.016C362.75 176.016 379.75 203.391 388.625 224.016H336ZM528 224.016H475.375C484.25 203.766 501.25 176.016 519.875 176.016C537.625 176.016 544 190.516 544 200.266C544 204.07 543.264 216.383 528 224.016ZM240.625 194.141C242.5 163.266 257.875 132.895 284.625 114.273C279.375 103.523 268.75 96.023 256 96.023H226.625L257.25 74.023C264.5 68.898 266.25 58.898 261 51.773L251.75 38.773C246.625 31.523 236.625 29.773 229.375 35.023L197.375 57.898L208.875 27.273C212 19.023 207.75 9.777 199.5 6.777L184.5 1.152C176.25 -1.973 167 2.277 163.875 10.527L144 63.523L124.125 10.402C121 2.152 111.75 -2.098 103.5 1.027L88.5 6.652C80.25 9.777 76 19.023 79.25 27.273L90.75 57.773L58.625 35.023C51.375 29.898 41.375 31.523 36.25 38.773L27 51.773C21.875 58.898 23.5 68.898 30.75 74.023L61.375 96.023H32C14.25 96.023 0 110.273 0 128.02V480C0 497.75 14.25 512 32 512H200.875C195.375 502.5 192 491.75 192 480V256.016C192 226.141 212.75 201.016 240.625 194.141ZM224 480C224 497.75 238.25 512 256 512H416V384.008H224V480ZM448 512H608C625.75 512 640 497.75 640 480V384.008H448V512Z" })
  }
));
GiftsSolid.displayName = "GiftsSolid";
var Gifts_default = GiftsSolid;
