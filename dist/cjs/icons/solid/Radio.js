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
var Radio_exports = {};
__export(Radio_exports, {
  default: () => Radio_default
});
module.exports = __toCommonJS(Radio_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RadioSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M447.997 128H218.509L494.747 47.032C507.466 43.298 514.747 29.969 511.028 17.251C507.31 4.548 494.028 -2.749 481.247 0.97L51.75 126.86C22.682 135.371 2.203 161.662 0.359 191.641L0 192V447.999C0 483.312 28.687 511.999 64 511.999H447.997C483.31 511.999 511.997 483.312 511.997 447.999V192C511.997 156.688 483.31 128 447.997 128ZM80 248C80 243.594 83.593 240 87.999 240H199.999C204.405 240 207.999 243.594 207.999 248V264C207.999 268.406 204.405 272 199.999 272H87.999C83.593 272 80 268.406 80 264V248ZM207.999 392C207.999 396.406 204.405 400 199.999 400H87.999C83.593 400 80 396.406 80 392V376C80 371.593 83.593 368 87.999 368H199.999C204.405 368 207.999 371.593 207.999 376V392ZM223.999 328C223.999 332.406 220.405 336 215.999 336H72C67.593 336 64 332.406 64 328V312C64 307.594 67.593 304 72 304H215.999C220.405 304 223.999 307.594 223.999 312V328ZM367.998 400C323.842 400 287.998 364.156 287.998 320S323.842 240 367.998 240S447.997 275.844 447.997 320S412.154 400 367.998 400Z" })
  }
));
RadioSolid.displayName = "RadioSolid";
var Radio_default = RadioSolid;
