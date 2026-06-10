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
var DownRight_exports = {};
__export(DownRight_exports, {
  default: () => DownRight_default
});
module.exports = __toCommonJS(DownRight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DownRightRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M109.255 112L109.255 112L232.003 234.746L265.943 268.687L299.884 234.746L336 198.633V384H150.633L186.747 347.887L220.689 313.945L186.748 280.004L64 157.254L109.209 112.004C109.214 112 109.231 112 109.255 112M109.255 64C96.97 64 84.686 68.684 75.313 78.059L30.059 123.312C11.313 142.059 11.315 172.453 30.059 191.195L152.807 313.945L89.375 377.375C80.219 386.531 77.485 400.281 82.437 412.25C87.391 424.219 99.063 432 112 432H352C369.672 432 384 417.688 384 400V160C384 147.062 376.203 135.375 364.25 130.438C360.283 128.766 356.117 127.957 351.987 127.957C343.674 127.957 335.503 131.238 329.375 137.375L265.944 200.805L143.196 78.059C133.823 68.684 121.539 64 109.255 64L109.255 64Z" })
  }
));
DownRightRegular.displayName = "DownRightRegular";
var DownRight_default = DownRightRegular;
