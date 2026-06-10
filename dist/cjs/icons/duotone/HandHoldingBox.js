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
var HandHoldingBox_exports = {};
__export(HandHoldingBox_exports, {
  default: () => HandHoldingBox_default
});
module.exports = __toCommonJS(HandHoldingBox_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HandHoldingBoxDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M568.197 336.312C555.072 318.5 530.059 314.656 512.264 327.844L392.592 416.016H271.98C263.232 416.016 255.982 408.766 255.982 400.02S263.232 384.023 271.98 384.023H350.227C366.225 384.023 380.975 373.148 383.598 357.402C386.848 337.406 371.475 320.031 351.977 320.031H191.986C164.988 320.031 138.865 329.281 117.867 346.281L71.369 384.023H15.998C7.25 384.023 0 391.273 0 400.02V496C0 504.75 7.25 512 15.998 512H362.977C385.006 512 406.896 504.812 424.676 491.723L559.728 392.207C577.51 379.117 581.305 354.09 568.197 336.312ZM351.967 128V0H223.967V128L287.967 96L351.967 128Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M128 256H448C465.6 256 480 241.6 480 224V32C480 14.4 465.6 0 448 0H352V128L288 96L224 128V0H128C110.4 0 96 14.4 96 32V224C96 241.6 110.4 256 128 256Z" })
    ]
  }
));
HandHoldingBoxDuotone.displayName = "HandHoldingBoxDuotone";
var HandHoldingBox_default = HandHoldingBoxDuotone;
