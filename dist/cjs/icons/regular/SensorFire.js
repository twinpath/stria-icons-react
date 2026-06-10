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
var SensorFire_exports = {};
__export(SensorFire_exports, {
  default: () => SensorFire_default
});
module.exports = __toCommonJS(SensorFire_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SensorFireRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M325.75 432H64C55.125 432 48 424.875 48 416V96C48 87.125 55.125 80 64 80H384C392.875 80 400 87.125 400 96V109.125C406 103 412 96.75 418.375 90.875L441.375 68.125C430.75 46.125 408.5 32.125 384 32H64C28.625 32 0 60.625 0 96V416C0 451.375 28.625 480 64 480H375.375C356.125 467.125 339.375 450.75 325.75 432ZM176 152V264C176 277.25 186.75 288 200 288S224 277.25 224 264V152C224 138.75 213.25 128 200 128S176 138.75 176 152ZM96 152V264C96 277.25 106.75 288 120 288S144 277.25 144 264V152C144 138.75 133.25 128 120 128S96 138.75 96 152ZM551.125 150.875C536.75 164.25 523.375 178.5 511 193.75C490 165 466.125 138.375 440 114.25C369.875 179.375 320 264.25 320 315.375C320 406.375 391.625 480 480 480S640 406.375 640 315.375C640 277.375 602.875 198.875 551.125 150.875ZM530.125 400.875C515.875 410.75 499 416 481.75 416C436.75 416 400 386.125 400 337.75C400 313.625 415.25 292.375 445.5 256C449.875 261 507.25 334.375 507.25 334.375L543.875 292.5C546.5 296.75 548.875 301 550.875 305C568 337.625 560.875 379.375 530.125 400.875Z" })
  }
));
SensorFireRegular.displayName = "SensorFireRegular";
var SensorFire_default = SensorFireRegular;
