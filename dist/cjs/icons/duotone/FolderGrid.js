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
var FolderGrid_exports = {};
__export(FolderGrid_exports, {
  default: () => FolderGrid_default
});
module.exports = __toCommonJS(FolderGrid_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FolderGridDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M464 96H272L208 32H48C21.5 32 0 53.5 0 80V432C0 458.5 21.5 480 48 480H464C490.5 480 512 458.5 512 432V144C512 117.5 490.5 96 464 96ZM176 320C176 328.836 168.838 336 160 336H96C87.164 336 80 328.836 80 320V256C80 247.164 87.164 240 96 240H160C168.838 240 176 247.164 176 256V320ZM304 320C304 328.836 296.838 336 288 336H224C215.164 336 208 328.836 208 320V256C208 247.164 215.164 240 224 240H288C296.838 240 304 247.164 304 256V320ZM432 320C432 328.836 424.838 336 416 336H352C343.164 336 336 328.836 336 320V256C336 247.164 343.164 240 352 240H416C424.838 240 432 247.164 432 256V320Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M160 240H96C87.164 240 80 247.164 80 256V320C80 328.836 87.164 336 96 336H160C168.838 336 176 328.836 176 320V256C176 247.164 168.838 240 160 240ZM288 240H224C215.164 240 208 247.164 208 256V320C208 328.836 215.164 336 224 336H288C296.838 336 304 328.836 304 320V256C304 247.164 296.838 240 288 240ZM416 240H352C343.164 240 336 247.164 336 256V320C336 328.836 343.164 336 352 336H416C424.838 336 432 328.836 432 320V256C432 247.164 424.838 240 416 240Z" })
    ]
  }
));
FolderGridDuotone.displayName = "FolderGridDuotone";
var FolderGrid_default = FolderGridDuotone;
