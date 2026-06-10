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
var PoliceBox_exports = {};
__export(PoliceBox_exports, {
  default: () => PoliceBox_default
});
module.exports = __toCommonJS(PoliceBox_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PoliceBoxDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M240 160H272V128H248C243.582 128 240 131.582 240 136V160ZM240 200C240 204.418 243.582 208 248 208H272V176H240V200ZM320 136C320 131.582 316.418 128 312 128H288V160H320V136ZM320 200V176H288V208H312C316.418 208 320 204.418 320 200ZM240 16C240 7.164 232.836 0 224 0S208 7.164 208 16V32H240V16ZM136 208H160V176H128V200C128 204.418 131.582 208 136 208ZM400 464H48C39.164 464 32 471.162 32 480V496C32 504.836 39.164 512 48 512H400C408.836 512 416 504.836 416 496V480C416 471.164 408.838 464 400 464ZM160 128H136C131.582 128 128 131.582 128 136V160H160V128ZM208 136C208 131.582 204.418 128 200 128H176V160H208V136ZM208 200V176H176V208H200C204.418 208 208 204.418 208 200Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M360 64H351.977V48C351.977 39.164 344.814 32 335.977 32H112C103.164 32 96 39.162 96 48V64H88C74.746 64 64 74.744 64 88V464H384V88C384 74.746 373.256 64 360 64ZM128 136C128 131.582 131.582 128 136 128H160V160H128V136ZM128 176H160V208H136C131.582 208 128 204.418 128 200V176ZM208 312C208 316.418 204.418 320 200 320H136C131.582 320 128 316.418 128 312V248C128 243.582 131.582 240 136 240H200C204.418 240 208 243.582 208 248V312ZM208 200C208 204.418 204.418 208 200 208H176V176H208V200ZM208 160H176V128H200C204.418 128 208 131.582 208 136V160ZM272 208H248C243.582 208 240 204.418 240 200V176H272V208ZM272 160H240V136C240 131.582 243.582 128 248 128H272V160ZM320 200C320 204.418 316.418 208 312 208H288V176H320V200ZM320 160H288V128H312C316.418 128 320 131.582 320 136V160Z" })
    ]
  }
));
PoliceBoxDuotone.displayName = "PoliceBoxDuotone";
var PoliceBox_default = PoliceBoxDuotone;
