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
const BusSchoolLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M32 128C23.164 128 16 135.164 16 144V240C16 248.836 23.164 256 32 256S48 248.836 48 240V144C48 135.164 40.836 128 32 128ZM544 128C535.164 128 528 135.164 528 144V240C528 248.836 535.164 256 544 256S560 248.836 560 240V144C560 135.164 552.836 128 544 128ZM160 328C146.746 328 136 338.746 136 352S146.746 376 160 376S184 365.254 184 352S173.254 328 160 328ZM416 328C402.746 328 392 338.746 392 352S402.746 376 416 376S440 365.254 440 352S429.254 328 416 328ZM336 64H240C231.164 64 224 71.164 224 80S231.164 96 240 96H336C344.836 96 352 88.836 352 80S344.836 64 336 64ZM496 96C496 51.25 403.875 0 288 0S80 51.25 80 96V299.053C69.93 314.238 64 332.414 64 352V384C64 407.629 76.951 428.037 96 439.123V496C96 504.836 103.164 512 112 512S128 504.836 128 496V448H448V496C448 504.836 455.164 512 464 512S480 504.836 480 496V439.123C499.049 428.037 512 407.629 512 384V352C512 332.414 506.07 314.238 496 299.053V96ZM112 96C112 80.57 176.355 32 288 32S464 80.57 464 96V128H112V96ZM464 160V269.314C449.83 261.068 433.576 256 416 256H304V160H464ZM112 160H272V256H160C142.424 256 126.17 261.068 112 269.314V160ZM480 384C480 401.645 465.645 416 448 416H128C110.355 416 96 401.645 96 384V352C96 316.711 124.711 288 160 288H416C451.289 288 480 316.711 480 352V384Z" })
  }
));
BusSchoolLight.displayName = "BusSchoolLight";
var BusSchool_default = BusSchoolLight;
