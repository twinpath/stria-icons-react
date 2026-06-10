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
var Clarinet_exports = {};
__export(Clarinet_exports, {
  default: () => Clarinet_default
});
module.exports = __toCommonJS(Clarinet_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ClarinetSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M631.562 129.891C626.344 127.109 620.031 127.391 615.125 130.687L571.156 160H480V128H496C504.801 128 512 120.799 512 112C512 103.199 504.801 96 496 96H240C231.199 96 224 103.199 224 112C224 120.799 231.199 128 240 128H256V160H101.25C97.75 160 94.375 160.5 91.125 161.625L11 188.375C4.375 190.5 0 196.625 0 203.5V276.5C0 283.375 4.375 289.5 11 291.625L91.125 318.375C94.375 319.5 97.75 320 101.25 320H571.156L615.125 349.312C617.812 351.094 620.906 352 624 352C626.594 352 629.188 351.375 631.562 350.109C636.75 347.328 640 341.906 640 336V144C640 138.094 636.75 132.672 631.562 129.891ZM384 128H448V160H384V128ZM288 128H352V160H288V128ZM272 264C258.75 264 248 253.25 248 240S258.75 216 272 216S296 226.75 296 240S285.25 264 272 264ZM368 264C354.75 264 344 253.25 344 240S354.75 216 368 216S392 226.75 392 240S381.25 264 368 264ZM464 264C450.75 264 440 253.25 440 240S450.75 216 464 216S488 226.75 488 240S477.25 264 464 264Z" })
  }
));
ClarinetSolid.displayName = "ClarinetSolid";
var Clarinet_default = ClarinetSolid;
