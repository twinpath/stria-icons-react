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
var BedFront_exports = {};
__export(BedFront_exports, {
  default: () => BedFront_default
});
module.exports = __toCommonJS(BedFront_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BedFrontRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M80 160C80 142.4 94.4 128 112 128H208C225.6 128 240 142.4 240 160V192H272V160C272 142.4 286.4 128 304 128H400C417.6 128 432 142.4 432 160V192H480V96C480 60.8 451.2 32 416 32H96C60.8 32 32 60.8 32 96V192H80V160ZM448 224H64C28.654 224 0 252.654 0 288V456C0 469.255 10.745 480 24 480H24C37.255 480 48 469.255 48 456V416H464V456C464 469.255 474.745 480 488 480L488 480C501.255 480 512 469.255 512 456V288C512 252.654 483.346 224 448 224ZM464 368H48V288C48 279.125 55.125 272 64 272H448C456.875 272 464 279.125 464 288V368Z" })
  }
));
BedFrontRegular.displayName = "BedFrontRegular";
var BedFront_default = BedFrontRegular;
