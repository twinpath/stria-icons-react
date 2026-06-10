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
var CommentSlash_exports = {};
__export(CommentSlash_exports, {
  default: () => CommentSlash_default
});
module.exports = __toCommonJS(CommentSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CommentSlashRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M630.812 469.109L512.634 376.484C551.992 339.973 576.068 292.359 576.068 240C576.068 125.125 461.443 32 320.068 32C252.324 32 191.007 53.604 145.247 88.535L38.812 5.113C28.343 -3.059 13.312 -1.246 5.109 9.191C-3.063 19.629 -1.235 34.723 9.187 42.895L601.187 506.891C605.593 510.328 610.796 512 615.984 512C623.109 512 630.156 508.844 634.89 502.812C643.062 492.375 641.234 477.281 630.812 469.109ZM474.562 346.645L184.287 119.133C220.759 94.852 268.126 80 320.068 80C434.818 80 528.068 151.75 528.068 240C528.068 281.031 507.693 318.33 474.562 346.645ZM320.068 400C293.318 400 266.943 395.875 241.693 387.875L218.943 380.75L199.443 394.5C185.193 404.625 165.568 415.875 141.943 423.5C149.318 411.375 156.318 397.75 161.818 383.25L172.443 355.25L151.818 333.375C133.818 314.125 112.068 282.25 112.068 240C112.068 223.164 115.505 206.945 121.794 191.695L83.128 161.389C70.917 185.654 64.068 212.164 64.068 240C64.068 287.625 83.943 331.25 116.943 366.25C102.068 405.75 71.068 439.125 70.568 439.5C63.943 446.5 62.193 456.75 65.943 465.5C69.818 474.25 78.443 480 88.068 480C149.568 480 198.068 454.25 227.193 433.75C256.068 442.75 287.318 448 320.068 448C357.581 448 393.103 441.283 425.208 429.502L379.081 393.35C360.355 397.619 340.578 400 320.068 400Z" })
  }
));
CommentSlashRegular.displayName = "CommentSlashRegular";
var CommentSlash_default = CommentSlashRegular;
