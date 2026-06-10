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
var BusSchool_exports = {};
__export(BusSchool_exports, {
  default: () => BusSchool_default
});
module.exports = __toCommonJS(BusSchool_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BusSchoolDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M96 480C96 497.625 110.375 512 128 512H160C177.625 512 192 497.625 192 480V448H96V480ZM384 448V480C384 497.625 398.375 512 416 512H448C465.625 512 480 497.625 480 480V448H384ZM432 224V160C432 142.375 417.625 128 400 128H304V256H400C417.625 256 432 241.625 432 224ZM144 160V224C144 241.625 158.375 256 176 256H272V128H176C158.375 128 144 142.375 144 160Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M56 240H80V260.875C70.625 266.5 64 276.25 64 288V416C64 433.625 78.375 448 96 448H480C497.625 448 512 433.625 512 416V288C512 276.25 505.375 266.5 496 260.875V240H520C533.25 240 544 229.25 544 216V136C544 122.75 533.25 112 520 112H496V80C496 35.25 403.875 0 288 0S80 35.25 80 80V112H56C42.75 112 32 122.75 32 136V216C32 229.25 42.75 240 56 240ZM464 352C464 369.625 449.625 384 432 384S400 369.625 400 352S414.375 320 432 320S464 334.375 464 352ZM432 160V224C432 241.625 417.625 256 400 256H304V128H400C417.625 128 432 142.375 432 160ZM207.965 64H367.965C376.801 64 383.965 71.162 383.965 80C383.965 88.836 376.801 96 367.965 96H207.965C199.129 96 191.965 88.836 191.965 80C191.965 71.162 199.129 64 207.965 64ZM144 160C144 142.375 158.375 128 176 128H272V256H176C158.375 256 144 241.625 144 224V160ZM144 320C161.625 320 176 334.375 176 352S161.625 384 144 384S112 369.625 112 352S126.375 320 144 320Z" })
    ]
  }
));
BusSchoolDuotone.displayName = "BusSchoolDuotone";
var BusSchool_default = BusSchoolDuotone;
