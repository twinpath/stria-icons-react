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
const FileInvoiceDollarThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M176 136C176 131.594 172.406 128 168 128H72C67.594 128 64 131.594 64 136S67.594 144 72 144H168C172.406 144 176 140.406 176 136ZM72 80H168C172.406 80 176 76.406 176 72S172.406 64 168 64H72C67.594 64 64 67.594 64 72S67.594 80 72 80ZM374.629 150.625L233.371 9.375C227.371 3.371 219.23 0 210.746 0H64C28.652 0 0 28.652 0 64V448C0 483.344 28.652 512 64 512H320C355.348 512 384 483.344 384 448V173.254C384 164.766 380.629 156.629 374.629 150.625ZM224 22.629L361.375 160H248C234.781 160 224 149.234 224 136V22.629ZM368 448C368 474.469 346.469 496 320 496H64C37.531 496 16 474.469 16 448V64C16 37.531 37.531 16 64 16H208V136C208 158.062 225.938 176 248 176H368V448ZM194.016 328.25L186.719 326.219C155.828 317.594 140.844 309.437 144.594 288.812C148.563 266.875 177.875 261.281 205.125 265.281C212.109 266.312 220.484 268.469 231.5 272.094C235.672 273.5 240.203 271.187 241.594 267S240.703 258.281 236.5 256.906C224.578 252.969 215.344 250.625 207.469 249.469C204.902 249.086 202.525 249.016 200.047 248.785V232C200.047 227.594 196.469 224 192.047 224S184.047 227.594 184.047 232V248.305C153.961 249.52 133.025 263.004 128.844 285.938C121.797 324.688 159.734 335.313 182.406 341.656L189.812 343.688C226.594 353.688 243.469 360.844 239.406 383.188C235.453 405.125 206.172 410.75 178.844 406.719C167.781 405.125 155.047 400.75 143.812 396.875L138.578 395.094C134.375 393.594 129.859 395.906 128.422 400.094C127 404.281 129.25 408.812 133.422 410.219L138.594 412C150.516 416.094 164.016 420.75 176.531 422.531C179.16 422.922 181.514 422.879 184.047 423.117V440C184.047 444.406 187.625 448 192.047 448S200.047 444.406 200.047 440V423.547C230.02 422.285 250.99 408.945 255.156 386.062C262.281 346.812 224.438 336.5 194.016 328.25Z" })
  }
));
FileInvoiceDollarThin.displayName = "FileInvoiceDollarThin";
var FileInvoiceDollar_default = FileInvoiceDollarThin;
