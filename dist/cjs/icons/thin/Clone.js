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
var Clone_exports = {};
__export(Clone_exports, {
  default: () => Clone_default
});
module.exports = __toCommonJS(Clone_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CloneThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M456 0H216C185.125 0 160 25.125 160 56V296C160 326.875 185.125 352 216 352H456C486.875 352 512 326.875 512 296V56C512 25.125 486.875 0 456 0ZM496 296C496 318.062 478.062 336 456 336H216C193.938 336 176 318.062 176 296V56C176 33.938 193.938 16 216 16H456C478.062 16 496 33.938 496 56V296ZM344 384C339.578 384 336 387.578 336 392V456C336 478.062 318.062 496 296 496H56C33.938 496 16 478.062 16 456V216C16 193.938 33.938 176 56 176H120C124.422 176 128 172.422 128 168S124.422 160 120 160H56C25.125 160 0 185.125 0 216V456C0 486.875 25.125 512 56 512H296C326.875 512 352 486.875 352 456V392C352 387.578 348.422 384 344 384Z" })
  }
));
CloneThin.displayName = "CloneThin";
var Clone_default = CloneThin;
