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
var Inbox_exports = {};
__export(Inbox_exports, {
  default: () => Inbox_default
});
module.exports = __toCommonJS(Inbox_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const InboxLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M508.285 304.918L447.031 56.25C443.469 42 430.688 32 416 32H96C81.312 32 68.531 42 64.969 56.25L3.715 304.918C1.248 314.936 0 325.215 0 335.533V432C0 458.51 21.49 480 48 480H464C490.51 480 512 458.51 512 432V335.533C512 325.215 510.752 314.936 508.285 304.918ZM96 64H415.984L471.16 288H368C361.938 288 356.406 291.438 353.688 296.844L326.109 352H185.891L158.312 296.844C155.594 291.438 150.062 288 144 288H40.838L96 64ZM480 432C480 440.822 472.822 448 464 448H48C39.178 448 32 440.822 32 432V335.533C32 330.305 33.035 325.16 33.885 320H134.109L161.687 375.156C164.406 380.562 169.938 384 176 384H336C342.062 384 347.594 380.562 350.312 375.156L377.891 320H478.115C478.965 325.16 480 330.307 480 335.533V432Z" })
  }
));
InboxLight.displayName = "InboxLight";
var Inbox_default = InboxLight;
