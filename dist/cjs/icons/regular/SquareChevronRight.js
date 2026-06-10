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
var SquareChevronRight_exports = {};
__export(SquareChevronRight_exports, {
  default: () => SquareChevronRight_default
});
module.exports = __toCommonJS(SquareChevronRight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareChevronRightRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M208.969 127.031C199.594 117.656 184.406 117.656 175.031 127.031S165.656 151.594 175.031 160.969L270.062 256L175.031 351.031C165.656 360.406 165.656 375.594 175.031 384.969S199.594 394.344 208.969 384.969L320.969 272.969C325.656 268.281 328 262.156 328 256S325.656 243.719 320.969 239.031L208.969 127.031ZM384 32H64C28.656 32 0 60.656 0 96V416C0 451.344 28.656 480 64 480H384C419.344 480 448 451.344 448 416V96C448 60.656 419.344 32 384 32ZM400 416C400 424.82 392.82 432 384 432H64C55.18 432 48 424.82 48 416V96C48 87.18 55.18 80 64 80H384C392.82 80 400 87.18 400 96V416Z" })
  }
));
SquareChevronRightRegular.displayName = "SquareChevronRightRegular";
var SquareChevronRight_default = SquareChevronRightRegular;
