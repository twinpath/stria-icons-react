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
const IdBadgeDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M336 0H48C21.49 0 0 21.492 0 48V464C0 490.508 21.49 512 48 512H336C362.51 512 384 490.508 384 464V48C384 21.492 362.51 0 336 0ZM144 64H240C248.836 64 256 71.164 256 80S248.836 96 240 96H144C135.164 96 128 88.836 128 80S135.164 64 144 64ZM192 160C227.346 160 256 188.656 256 224S227.346 288 192 288S128 259.344 128 224S156.654 160 192 160ZM288 416H96C87.164 416 80 408.836 80 400C80 355.816 115.816 320 160 320H224C268.184 320 304 355.816 304 400C304 408.836 296.836 416 288 416Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M192 160C227.346 160 256 188.654 256 224S227.346 288 192 288S128 259.346 128 224S156.654 160 192 160ZM288 416H96C87.164 416 80 408.836 80 400C80 355.816 115.816 320 160 320H224C268.184 320 304 355.816 304 400C304 408.836 296.836 416 288 416Z" })
    ]
  }
));
IdBadgeDuotone.displayName = "IdBadgeDuotone";
var IdBadge_default = IdBadgeDuotone;
