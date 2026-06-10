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
var FileInvoiceDollar_exports = {};
__export(FileInvoiceDollar_exports, {
  default: () => FileInvoiceDollar_default
});
module.exports = __toCommonJS(FileInvoiceDollar_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FileInvoiceDollarSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 128H256V0L384 128ZM256 160H384V464C384 490.508 362.508 512 336 512H48C21.492 512 0 490.508 0 464V48C0 21.492 21.492 0 48 0H224V128C224 145.672 238.328 160 256 160ZM64 88C64 92.375 67.625 96 72 96H152C156.375 96 160 92.375 160 88V72C160 67.625 156.375 64 152 64H72C67.625 64 64 67.625 64 72V88ZM72 160H152C156.375 160 160 156.375 160 152V136C160 131.625 156.375 128 152 128H72C67.625 128 64 131.625 64 136V152C64 156.375 67.625 160 72 160ZM197.502 316.75L191.955 315.156C168.252 308.188 168.814 304.969 169.58 300.5C170.955 292.688 186.174 290.781 199.846 292.875C205.439 293.719 211.58 295.688 217.439 297.719C227.83 301.313 239.268 295.781 242.893 285.375C246.518 274.938 241.002 263.531 230.564 259.906C223.346 257.422 217.455 255.828 212.002 254.633V248C212.002 236.969 203.049 228 192.002 228S172.002 236.969 172.002 248V253.992C149.58 258.762 133.811 272.75 130.174 293.688C122.768 336.531 163.361 348.438 180.689 353.531L186.502 355.219C215.783 363.594 215.299 366.406 214.424 371.5C213.049 379.313 197.83 381.25 184.111 379.125C177.174 378.094 168.299 374.906 160.455 372.094L155.986 370.469C145.58 366.875 134.158 372.281 130.471 382.688C126.799 393.094 132.252 404.531 142.674 408.219L146.939 409.719C154.697 412.508 163.32 415.309 172.002 417.23V424C172.002 435.031 180.955 444 192.002 444S212.002 435.031 212.002 424V417.746C234.363 412.953 250.207 399.219 253.83 378.312C261.314 335.031 219.799 323.125 197.502 316.75Z" })
  }
));
FileInvoiceDollarSolid.displayName = "FileInvoiceDollarSolid";
var FileInvoiceDollar_default = FileInvoiceDollarSolid;
