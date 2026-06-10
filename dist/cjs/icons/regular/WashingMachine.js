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
var WashingMachine_exports = {};
__export(WashingMachine_exports, {
  default: () => WashingMachine_default
});
module.exports = __toCommonJS(WashingMachine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WashingMachineRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M368 0H80C35.818 0 0 35.816 0 80V448C0 483.348 28.654 512 64 512H384C419.346 512 448 483.348 448 448V80C448 35.816 412.184 0 368 0ZM400 448C400 456.824 392.822 464 384 464H64C55.178 464 48 456.824 48 448V80C48 62.355 62.355 48 80 48H368C385.645 48 400 62.355 400 80V448ZM128.053 104C128.053 90.75 117.227 80 104.035 80C90.721 80 80.018 90.75 80.018 104S90.721 128 104.035 128C117.227 128 128.053 117.25 128.053 104ZM184.053 128C197.244 128 207.947 117.25 207.947 104S197.244 80 184.053 80C170.738 80 160.035 90.75 160.035 104S170.738 128 184.053 128ZM224 160C148.836 160 87.982 220.875 87.982 296S148.836 432 224 432S360.018 371.125 360.018 296S299.164 160 224 160ZM224 386.625C173.973 386.625 133.404 346 133.279 296C133.279 293.125 133.902 290.375 134.15 287.5C140.373 290.625 147.219 292.25 154.062 292.25C167.379 292.25 179.947 286.875 189.154 277.375C198.24 286.875 210.809 292.25 224 292.25S249.76 286.875 258.846 277.375C268.053 286.875 280.623 292.25 293.938 292.25C300.783 292.25 307.627 290.625 313.85 287.5C314.098 290.375 314.721 293.125 314.721 296C314.596 346 274.027 386.625 224 386.625Z" })
  }
));
WashingMachineRegular.displayName = "WashingMachineRegular";
var WashingMachine_default = WashingMachineRegular;
