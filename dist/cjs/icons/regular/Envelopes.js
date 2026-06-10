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
var Envelopes_exports = {};
__export(Envelopes_exports, {
  default: () => Envelopes_default
});
module.exports = __toCommonJS(Envelopes_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const EnvelopesRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M544 32H192C156.654 32 128 60.654 128 96V320C128 355.346 156.654 384 192 384H544C579.348 384 608 355.346 608 320V96C608 60.654 579.348 32 544 32ZM560 320C560 328.822 552.822 336 544 336H192C183.178 336 176 328.822 176 320V161.918L296.062 261.969C316.25 278.75 341.781 288 368 288S419.75 278.75 439.969 261.953L560 161.92V320ZM560 99.42L409.25 225.063C386.062 244.344 349.906 244.328 326.781 225.078L176 99.418V96C176 87.178 183.178 80 192 80H544C552.822 80 560 87.178 560 96V99.42ZM80 400V96C53.49 96 32 117.492 32 144V416C32 451.346 60.654 480 96 480H464C490.51 480 512 458.508 512 432H112C94.326 432 80 417.672 80 400Z" })
  }
));
EnvelopesRegular.displayName = "EnvelopesRegular";
var Envelopes_default = EnvelopesRegular;
