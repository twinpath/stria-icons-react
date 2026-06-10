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
var MonitorWaveform_exports = {};
__export(MonitorWaveform_exports, {
  default: () => MonitorWaveform_default
});
module.exports = __toCommonJS(MonitorWaveform_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MonitorWaveformRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H512C547.348 480 576 451.346 576 416V96C576 60.654 547.348 32 512 32ZM528 416C528 424.822 520.822 432 512 432H64C55.178 432 48 424.822 48 416V288H162.406L203.406 356.344C207.781 363.594 215.594 368 224 368C224.312 368 224.625 368 224.906 367.969C233.688 367.656 241.562 362.562 245.469 354.719L305.906 233.844L331.406 276.344C335.75 283.562 343.562 288 352 288H424C437.25 288 448 277.25 448 264S437.25 240 424 240H365.594L324.594 171.656C320.062 164.156 310.812 159.344 303.094 160.031C294.312 160.344 286.438 165.438 282.531 173.281L222.094 294.156L196.594 251.656C192.25 244.438 184.438 240 176 240H48V96C48 87.178 55.178 80 64 80H512C520.822 80 528 87.178 528 96V416Z" })
  }
));
MonitorWaveformRegular.displayName = "MonitorWaveformRegular";
var MonitorWaveform_default = MonitorWaveformRegular;
