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
var Snooze_exports = {};
__export(Snooze_exports, {
  default: () => Snooze_default
});
module.exports = __toCommonJS(Snooze_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SnoozeThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M216.001 240H40.005C35.598 240 32.005 243.594 32.005 248S35.598 256 40.005 256H199.189L1.787 498.969C-0.151 501.344 -0.557 504.656 0.787 507.437C2.099 510.219 4.912 512 8.005 512H200.001C204.408 512 208.001 508.406 208.001 504S204.408 496 200.001 496H24.817L222.22 253.031C224.157 250.656 224.563 247.344 223.22 244.563C221.907 241.781 219.095 240 216.001 240ZM439.997 416H312.874L446.184 253.062C448.153 250.687 448.559 247.375 447.215 244.562C445.903 241.781 443.09 240 439.997 240H311.999C307.593 240 303.999 243.594 303.999 248S307.593 256 311.999 256H423.122L289.812 418.938C287.843 421.313 287.437 424.625 288.781 427.438C290.093 430.219 292.906 432 296 432H439.997C444.403 432 447.996 428.406 447.996 424S444.403 416 439.997 416ZM168.002 176H311.999C316.405 176 319.999 172.406 319.999 168S316.405 160 311.999 160H185.97L317.937 13.344C320.062 11 320.593 7.625 319.312 4.75C318.03 1.844 315.155 0 311.999 0H184.002C179.596 0 176.002 3.594 176.002 8S179.596 16 184.002 16H294.031L162.065 162.656C159.94 165 159.408 168.375 160.69 171.25C161.971 174.156 164.846 176 168.002 176Z" })
  }
));
SnoozeThin.displayName = "SnoozeThin";
var Snooze_default = SnoozeThin;
