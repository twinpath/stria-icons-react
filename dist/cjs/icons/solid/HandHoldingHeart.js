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
var HandHoldingHeart_exports = {};
__export(HandHoldingHeart_exports, {
  default: () => HandHoldingHeart_default
});
module.exports = __toCommonJS(HandHoldingHeart_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HandHoldingHeartSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M275.23 250.523C282.23 257.898 293.73 257.898 300.73 250.523L409.73 136.276C441.23 103.152 439.48 48.153 404.105 17.529C373.23 -9.22 327.355 -4.345 299.23 25.279L287.98 36.903L276.855 25.279C248.73 -4.345 202.73 -9.22 171.98 17.529C136.73 48.153 134.73 103.152 166.355 136.276L275.23 250.523ZM568.197 336.317C555.072 318.505 530.059 314.662 512.264 327.849L392.592 416.018H271.98C263.232 416.018 255.982 408.768 255.982 400.023C255.982 391.277 263.232 384.027 271.98 384.027H350.227C366.225 384.027 380.975 373.152 383.598 357.407C386.848 337.411 371.475 320.036 351.977 320.036H191.986C164.988 320.036 138.865 329.286 117.867 346.286L71.369 384.027H15.998C7.25 384.027 0 391.277 0 400.023V496C0 504.75 7.25 512 15.998 512H362.977C385.006 512 406.896 504.813 424.676 491.723L559.729 392.21C577.51 379.121 581.305 354.094 568.197 336.317Z" })
  }
));
HandHoldingHeartSolid.displayName = "HandHoldingHeartSolid";
var HandHoldingHeart_default = HandHoldingHeartSolid;
