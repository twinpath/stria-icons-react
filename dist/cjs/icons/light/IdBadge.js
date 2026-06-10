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
var IdBadge_exports = {};
__export(IdBadge_exports, {
  default: () => IdBadge_default
});
module.exports = __toCommonJS(IdBadge_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const IdBadgeLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 0H64C28.654 0 0 28.654 0 64V448C0 483.348 28.654 512 64 512H320C355.348 512 384 483.348 384 448V64C384 28.654 355.348 0 320 0ZM352 448C352 465.645 337.645 480 320 480H64C46.355 480 32 465.645 32 448V64C32 46.355 46.355 32 64 32H320C337.645 32 352 46.355 352 64V448ZM192 288C227.346 288 256 259.346 256 224S227.346 160 192 160S128 188.654 128 224S156.654 288 192 288ZM192 192C209.645 192 224 206.355 224 224S209.645 256 192 256S160 241.645 160 224S174.355 192 192 192ZM224 320H160C115.818 320 80 355.816 80 400C80 408.836 87.164 416 96 416C104.838 416 112 408.836 112 400C112 373.49 133.49 352 160 352H224C250.51 352 272 373.49 272 400C272 408.836 279.164 416 288 416C296.838 416 304 408.836 304 400C304 355.816 268.184 320 224 320ZM144 96H240C248.838 96 256 88.836 256 80S248.838 64 240 64H144C135.164 64 128 71.164 128 80S135.164 96 144 96Z" })
  }
));
IdBadgeLight.displayName = "IdBadgeLight";
var IdBadge_default = IdBadgeLight;
