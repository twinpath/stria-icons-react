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
var SquareUpLeft_exports = {};
__export(SquareUpLeft_exports, {
  default: () => SquareUpLeft_default
});
module.exports = __toCommonJS(SquareUpLeft_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareUpLeftDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 32H64C28.654 32 0 60.652 0 96V416C0 451.344 28.654 480 64 480H384C419.346 480 448 451.344 448 416V96C448 60.652 419.346 32 384 32ZM325.824 335.196L303.196 357.824C290.699 370.321 270.438 370.321 257.941 357.824L190.059 289.941L144.805 335.195C140.23 339.77 133.348 341.148 127.369 338.664C121.381 336.187 117.492 330.355 117.492 323.883V165.492C117.492 156.656 124.656 149.492 133.492 149.492H291.883C298.357 149.492 304.189 153.383 306.666 159.367C309.15 165.344 307.77 172.227 303.195 176.805L257.941 222.059L325.824 289.941C338.321 302.438 338.321 322.699 325.824 335.196Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M325.332 335.196L302.704 357.824C290.207 370.321 269.946 370.321 257.449 357.824L189.566 289.941L144.312 335.195C139.738 339.77 132.855 341.148 126.877 338.664C120.889 336.187 117 330.355 117 323.883V165.492C117 156.656 124.163 149.492 133 149.492H291.391C297.865 149.492 303.697 153.383 306.174 159.367C308.658 165.344 307.277 172.227 302.703 176.805L257.449 222.059L325.332 289.941C337.828 302.438 337.828 322.699 325.332 335.196Z" })
    ]
  }
));
SquareUpLeftDuotone.displayName = "SquareUpLeftDuotone";
var SquareUpLeft_default = SquareUpLeftDuotone;
