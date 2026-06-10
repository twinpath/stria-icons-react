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
var ArrowRightFromBracket_exports = {};
__export(ArrowRightFromBracket_exports, {
  default: () => ArrowRightFromBracket_default
});
module.exports = __toCommonJS(ArrowRightFromBracket_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowRightFromBracketThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M120 464H40C26.766 464 16 453.234 16 440V72C16 58.766 26.766 48 40 48H120C124.422 48 128 44.422 128 40S124.422 32 120 32H40C17.938 32 0 49.938 0 72V440C0 462.062 17.938 480 40 480H120C124.422 480 128 476.422 128 472S124.422 464 120 464ZM509.656 250.344L325.656 66.344C324.094 64.781 322.062 64 320 64S315.906 64.781 314.344 66.344C311.219 69.469 311.219 74.531 314.344 77.656L484.688 248H136C131.594 248 128 251.578 128 256S131.594 264 136 264H484.688L314.344 434.344C311.219 437.469 311.219 442.531 314.344 445.656C315.906 447.219 317.938 448 320 448S324.094 447.219 325.656 445.656L509.656 261.656C511.219 260.094 512 258.047 512 256S511.219 251.906 509.656 250.344Z" })
  }
));
ArrowRightFromBracketThin.displayName = "ArrowRightFromBracketThin";
var ArrowRightFromBracket_default = ArrowRightFromBracketThin;
