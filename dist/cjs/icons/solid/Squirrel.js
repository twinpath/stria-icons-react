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
var Squirrel_exports = {};
__export(Squirrel_exports, {
  default: () => Squirrel_default
});
module.exports = __toCommonJS(Squirrel_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquirrelSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M463.898 448H448.899C467.148 429.625 479.898 405.875 479.898 384C479.898 357.5 457.773 331.25 432.024 322.875V224H479.898C500.259 224 515.518 205.15 511.294 185.232C500.946 136.434 466.81 96 415.899 96V64C367.901 64 341.651 126.75 326.527 172.25L287.993 288.076V144C287.993 64.471 223.524 0 143.996 0S0 64.471 0 144C0 212.504 47.94 269.578 112.026 284.158C101.755 305.523 95.644 329.221 96.019 354.676C97.328 443.396 175.55 512 264.278 512H495.897C504.647 512 511.897 504.875 511.897 496C511.897 469.6 490.298 448 463.898 448ZM415.899 160C415.899 151.125 423.024 144 431.899 144C440.774 144 447.899 151.125 447.899 160S440.774 176 431.899 176C423.024 176 415.899 168.875 415.899 160Z" })
  }
));
SquirrelSolid.displayName = "SquirrelSolid";
var Squirrel_default = SquirrelSolid;
