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
var Loveseat_exports = {};
__export(Loveseat_exports, {
  default: () => Loveseat_default
});
module.exports = __toCommonJS(Loveseat_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LoveseatRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 224C412.654 224 384 252.654 384 288H128C128 252.654 99.348 224 64 224C28.654 224 0 252.654 0 288V448C0 465.674 14.328 480 32 480H96C113.674 480 128 465.674 128 448H384C384 465.674 398.328 480 416 480H480C497.674 480 512 465.674 512 448V288C512 252.654 483.348 224 448 224ZM80 432H48V288C48 279.178 55.178 272 64 272S80 279.178 80 288V432ZM384 400H128V336H384V400ZM464 432H432V288C432 279.178 439.178 272 448 272S464 279.178 464 288V432ZM88 192C101.25 192 112 181.25 112 168V152C112 112.312 144.297 80 184 80H328C367.703 80 400 112.312 400 152V168C400 181.25 410.75 192 424 192S448 181.25 448 168V152C448 85.844 394.172 32 328 32H184C117.828 32 64 85.844 64 152V168C64 181.25 74.75 192 88 192Z" })
  }
));
LoveseatRegular.displayName = "LoveseatRegular";
var Loveseat_default = LoveseatRegular;
