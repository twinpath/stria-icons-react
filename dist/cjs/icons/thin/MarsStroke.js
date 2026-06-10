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
var MarsStroke_exports = {};
__export(MarsStroke_exports, {
  default: () => MarsStroke_default
});
module.exports = __toCommonJS(MarsStroke_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MarsStrokeThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M504 0H360C355.578 0 352 3.578 352 8S355.578 16 360 16H484.688L384 116.688L341.656 74.344C338.531 71.219 333.469 71.219 330.344 74.344S327.219 82.531 330.344 85.656L372.688 128L326.525 174.164C295.232 145.578 253.721 128 208 128C110.799 128 32 206.797 32 304S110.799 480 208 480C305.203 480 384 401.203 384 304C384 258.281 366.42 216.766 337.838 185.477L384 139.312L426.344 181.656C427.906 183.219 429.953 184 432 184S436.094 183.219 437.656 181.656C440.781 178.531 440.781 173.469 437.656 170.344L395.312 128L496 27.312V152C496 156.422 499.578 160 504 160S512 156.422 512 152V8C512 3.578 508.422 0 504 0ZM368 304C368 392.223 296.225 464 208 464S48 392.223 48 304S119.775 144 208 144S368 215.777 368 304Z" })
  }
));
MarsStrokeThin.displayName = "MarsStrokeThin";
var MarsStroke_default = MarsStrokeThin;
