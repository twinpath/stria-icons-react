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
var CloudShowers_exports = {};
__export(CloudShowers_exports, {
  default: () => CloudShowers_default
});
module.exports = __toCommonJS(CloudShowers_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CloudShowersThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M40 368C35.594 368 32 371.578 32 376V472C32 476.422 35.594 480 40 480S48 476.422 48 472V376C48 371.578 44.406 368 40 368ZM136 400C131.594 400 128 403.578 128 408V504C128 508.422 131.594 512 136 512S144 508.422 144 504V408C144 403.578 140.406 400 136 400ZM232 368C227.594 368 224 371.578 224 376V472C224 476.422 227.594 480 232 480S240 476.422 240 472V376C240 371.578 236.406 368 232 368ZM328 400C323.594 400 320 403.578 320 408V504C320 508.422 323.594 512 328 512S336 508.422 336 504V408C336 403.578 332.406 400 328 400ZM424 368C419.594 368 416 371.578 416 376V472C416 476.422 419.594 480 424 480S432 476.422 432 472V376C432 371.578 428.406 368 424 368ZM416 128C415.375 128 414.875 128.25 414.375 128.25C415.5 123 416 117.625 416 112C416 67.75 380.25 32 336 32C311.375 32 289.75 43.25 275 60.75C256.375 24.75 219.25 0 176 0C114.125 0 64 50.125 64 112C64 119.25 64.75 126.25 66.125 133.25C27.75 145.75 0 181.5 0 224C0 277 43 320 96 320H416C469 320 512 277 512 224S469 128 416 128ZM416 304H96C51.889 304 16 268.111 16 224C16 189.551 38.135 159.193 71.08 148.463L84.557 144.072L81.824 130.166C80.598 123.914 80 117.971 80 112C80 59.064 123.064 16 176 16C211.674 16 244.162 35.965 260.789 68.102L271.797 89.377L287.234 71.061C299.77 56.189 317.088 48 336 48C371.289 48 400 76.709 400 112C400 116.691 399.584 120.91 398.73 124.896L394.582 144.25H414.375C415.479 144.25 416.443 144.146 417.277 144.01C460.801 144.697 496 180.316 496 224C496 268.111 460.111 304 416 304Z" })
  }
));
CloudShowersThin.displayName = "CloudShowersThin";
var CloudShowers_default = CloudShowersThin;
