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
var Copy_exports = {};
__export(Copy_exports, {
  default: () => Copy_default
});
module.exports = __toCommonJS(Copy_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CopyRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M502.646 70.625L441.393 9.375C435.391 3.371 427.252 0 418.766 0H256C220.652 0 191.998 28.656 192 64.004L192.02 320.004C192.021 355.352 220.676 384 256.02 384H448.02C483.219 384 512.02 355.199 512.02 320V93.254C512.02 84.766 508.648 76.629 502.646 70.625ZM464.021 320C464.021 328.836 456.857 336 448.021 336H256.018C247.18 336 240.018 328.836 240.018 320L240 64.125C240 55.289 247.164 48.125 256 48.125H384.027V96C384.027 113.672 398.354 128 416.027 128H464.021V320ZM272.021 448C272.021 456.836 264.857 464 256.021 464H64.018C55.18 464 48.018 456.836 48.018 448L48 192.125C48 183.289 55.164 176.125 64 176.125H160.02V128H64C28.652 128 -0.002 156.656 0 192.004L0.02 448.004C0.021 483.352 28.676 512 64.02 512H256.02C291.219 512 320.02 483.199 320.02 448V416H272.021V448Z" })
  }
));
CopyRegular.displayName = "CopyRegular";
var Copy_default = CopyRegular;
