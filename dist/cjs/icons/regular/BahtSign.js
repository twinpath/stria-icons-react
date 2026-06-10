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
var BahtSign_exports = {};
__export(BahtSign_exports, {
  default: () => BahtSign_default
});
module.exports = __toCommonJS(BahtSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BahtSignRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 320 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M261.438 237.344C277.938 218.938 288 194.625 288 168C288 110.656 241.344 64 184 64H168V24C168 10.75 157.25 0 144 0S120 10.75 120 24V64H24C10.75 64 0 74.75 0 88V424C0 436.531 9.625 446.938 22.125 447.938C29.999 448.531 42.75 448.781 58.906 448.781C76.004 448.781 96.988 448.51 120 448.156V488C120 501.25 130.75 512 144 512S168 501.25 168 488V447.404C182.139 447.189 196.203 446.986 209.625 446.844C270.5 446.219 320 396.219 320 335.438C320 293.125 296.281 256.219 261.438 237.344ZM184 112C214.875 112 240 137.125 240 168S214.875 224 184 224H168V112H184ZM48 112H120V224H48V112ZM48 400.75V272H120V400.135C92.662 400.531 66.613 400.799 48 400.75ZM209.125 398.844C195.857 398.984 181.969 399.184 168 399.395V272H208.562C243.531 272 272 300.469 272 335.438C272 370.031 243.781 398.469 209.125 398.844Z" })
  }
));
BahtSignRegular.displayName = "BahtSignRegular";
var BahtSign_default = BahtSignRegular;
