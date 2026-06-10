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
var AnglesUp_exports = {};
__export(AnglesUp_exports, {
  default: () => AnglesUp_default
});
module.exports = __toCommonJS(AnglesUp_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AnglesUpLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M42.729 235.893L192.001 101.525L341.272 235.893C347.503 241.488 357.626 241.623 363.897 234.705C369.803 228.143 369.272 218.018 362.71 212.111L202.719 68.102C196.594 62.633 187.407 62.633 181.282 68.102L21.292 212.111C14.729 218.018 14.198 228.143 20.104 234.705C26.042 241.254 36.135 241.77 42.729 235.893ZM202.719 260.102C196.594 254.633 187.407 254.633 181.282 260.102L21.292 404.111C14.729 410.018 14.198 420.143 20.104 426.705C26.042 433.254 36.135 433.77 42.729 427.893L192.001 293.525L341.272 427.893C347.503 433.488 357.626 433.623 363.897 426.705C369.803 420.143 369.272 410.018 362.71 404.111L202.719 260.102Z" })
  }
));
AnglesUpLight.displayName = "AnglesUpLight";
var AnglesUp_default = AnglesUpLight;
