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
var BellPlus_exports = {};
__export(BellPlus_exports, {
  default: () => BellPlus_default
});
module.exports = __toCommonJS(BellPlus_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BellPlusRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M224 512C259.375 512 288 483.43 288 448.125H160C160 483.43 188.625 512 224 512ZM439.375 362.54C420 341.833 383.875 310.641 383.875 208.595C383.875 130.994 329.5 68.994 256 53.771V32.939C256.375 21.334 250.25 10.353 240.25 4.494C230.25 -1.498 217.75 -1.498 207.75 4.494C197.625 10.353 191.625 21.334 192 32.939V53.771C118.5 68.994 64.125 130.994 64.125 208.595C64.125 310.641 28 341.833 8.625 362.54C3 368.407 0 376.141 0 384.25C0.125 400.594 13 416.188 32.125 416.188H415.875C435 416.188 447.875 400.594 448 384.25C448 376.141 445 368.407 439.375 362.54ZM67.5 368.282C88.75 340.337 112 294.052 112 209.22V208.595C112 146.837 162.125 96.814 224 96.814S336 146.837 336 208.595V209.22C336 294.177 359.25 340.337 380.5 368.282H67.5ZM280 216.001H248V184.001C248 170.751 237.25 160.001 224 160.001S200 170.751 200 184.001V216.001H168C154.75 216.001 144 226.751 144 240.001S154.75 264.001 168 264.001H200V296.001C200 309.251 210.75 320.001 224 320.001S248 309.251 248 296.001V264.001H280C293.25 264.001 304 253.251 304 240.001S293.25 216.001 280 216.001Z" })
  }
));
BellPlusRegular.displayName = "BellPlusRegular";
var BellPlus_default = BellPlusRegular;
